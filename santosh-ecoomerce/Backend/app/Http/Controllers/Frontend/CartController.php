<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Cart;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class CartController extends Controller
{

      public function index(Request $request)
    {
        $cartItems = Cart::where('user_id', $request->user()->id)->get();
        return response()->json($cartItems);
    }

    public function store(Request $request)
    {
        $item = Cart::updateOrCreate(
            ['user_id' => $request->user()->id, 'product_id' => $request->product_id],
            ['quantity' => \DB::raw('quantity + ' . $request->quantity)]
        );

        return response()->json($item);
    }

    public function destroy(Request $request, $id)
    {
        $deleted = Cart::where('user_id', $request->user()->id)->where('id', $id)->delete();
        return response()->json(['success' => $deleted]);
    }
}
