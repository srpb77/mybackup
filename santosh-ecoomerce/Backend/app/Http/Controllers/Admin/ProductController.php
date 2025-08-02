<?php

namespace App\Http\Controllers\Admin;

use App\DataTables\ProductDataTable;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductCreateRequest;
use App\Http\Requests\Admin\ProductUpdateRequest;
use App\Models\Category;
use App\Models\Product;
use App\Traits\FileUploadTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use Str;

class ProductController extends Controller
{
    use FileUploadTrait;
    /**
     * Display a listing of the resource.
     */
    public function index(ProductDataTable $dataTable) : View|JsonResponse
    {
        return $dataTable->render('admin.product.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() : View
    {
        $categories = Category::all();
        return view('admin.product.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductCreateRequest $request) : RedirectResponse
    {
        /** Handle image file */
        $imagePath = $this->uploadImage($request, 'image');

        $product = new Product();
        $product->thumb_image = $imagePath;
        $product->name = $request->name;
        $product->slug = generateUniqueSlug('Product', $request->name);
        $product->category_id = $request->category;
        $product->price = $request->price;
        $product->offer_price = $request->offer_price ?? 0;
        $product->quantity = $request->quantity;
        $product->short_description = $request->short_description;
        $product->long_description = $request->long_description;
        $product->sku = $request->sku;
        $product->seo_title = $request->seo_title;
        $product->seo_description = $request->seo_description;
        $product->show_at_home = $request->show_at_home;
        $product->status = $request->status;
        $product->save();

        toastr()->success('Create Successfully');

        return to_route('admin.product.index');

    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) : View
    {
        $categories = Category::all();
        $product = Product::findOrFail($id);
        return view('admin.product.edit', compact('categories', 'product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductUpdateRequest $request, string $id) : RedirectResponse
    {
                $product = Product::findOrFail($id);

                /** Handle image file */
                $imagePath = $this->uploadImage($request, 'image', $product->thumb_image);

                $product->thumb_image = !empty($imagePath) ? $imagePath : $product->thumb_image;
                $product->name = $request->name;
                $product->category_id = $request->category;
                $product->price = $request->price;
                $product->offer_price = $request->offer_price ?? 0;
                $product->quantity = $request->quantity;
                $product->short_description = $request->short_description;
                $product->long_description = $request->long_description;
                $product->sku = $request->sku;
                $product->seo_title = $request->seo_title;
                $product->seo_description = $request->seo_description;
                $product->show_at_home = $request->show_at_home;
                $product->status = $request->status;
                $product->save();

                toastr()->success('Update Successfully');

                return to_route('admin.product.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) : Response
    {
        try{
            $product = Product::findOrFail($id);
            $this->removeImage($product->thumb_image);
            $product->delete();

            return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
        }catch(\Exception $e){
            return response(['status' => 'error', 'message' => 'something went wrong!']);
        }
    }

    public function getProductsByCategory()
    {
        $categories = Category::with(['products' => function ($query) {
            $query->select('id', 'name', 'category_id', 'price', 'offer_price', 'thumb_image', 'slug', 'short_description');
        }])->get();

        return response()->json([
            'status' => true,
            'data' => $categories,
        ]);
    }

    public function showBySlug($slug)
{
    $product = Product::with(['category', 'productImages', 'productSizes', 'productOptions'])
                ->where('slug', $slug)
                ->first();

    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    return response()->json($product);
}

public function getCategoryProducts($id)
    {
        $products = Product::with(['category'])
            ->where('category_id', $id)
            ->where('status', 1) // optional: filter only active products
            ->get();

        return response()->json($products);
    }

 



    public function ShowAllProducts(Request $request)
{
    $query = Product::with('category'); // Eager load category

    // Handle search
    if ($request->filled('search')) {
        $query->where('name', 'like', '%' . $request->search . '%');
    }

    // Handle category filter
    if ($request->filled('category')) {
        $query->whereHas('category', function ($q) use ($request) {
            $q->where('slug', $request->category);
        });
    }

    // Set default perPage to 10 if not passed
    $perPage = $request->get('per_page', 50);

    $products = $query->paginate($perPage);

    return response()->json([
        'status' => true,
        'data' => $products->items(), // actual data
        'pagination' => [
            'total' => $products->total(),
            'current_page' => $products->currentPage(),
            'last_page' => $products->lastPage(),
            'per_page' => $products->perPage(),
        ],
    ]);
}

    public function showCategories1()
{
    return response()->json([
        'status' => true,
        'data' => Category::all()
    ]);
}
}
