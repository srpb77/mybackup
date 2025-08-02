<?php


use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\BannerSliderController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ChefController;
use App\Http\Controllers\Admin\CounterController;
use App\Http\Controllers\Admin\DailyOfferController;
use App\Http\Controllers\Admin\DeliveryAreaController;
use App\Http\Controllers\Admin\FooterInfoController;
use App\Http\Controllers\Admin\MenuBuilderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\SocialLinkController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Admin\WhyChooseUsController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Frontend\AddressController;
use App\Http\Controllers\Frontend\CartController;
use App\Models\SectionTitle;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/




// Public Routes
Route::post('/register', [RegisteredUserController::class, 'store']);
Route::post('/login', [AuthenticatedSessionController::class, 'loginstore']);
Route::post('/logout', [AuthenticatedSessionController::class, 'logindestroy'])->middleware('auth:sanctum');


// Optional: Authenticated route
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->put('/user/update', [UserController::class, 'update']);



// Protected Routes (Only Logged-in Users)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

     Route::get('/cart', [CartController::class, 'index']);
    Route::post('/cart', [CartController::class, 'store']);
    Route::delete('/cart/{id}', [CartController::class, 'destroy']);

});
  
Route::middleware(['throttle:200,1'])->group(function () {

Route::get('/banners', [SliderController::class, 'ShowAllBanners']);
Route::get('/menu/{menuId}', [MenuBuilderController::class, 'getMenu']);
Route::get('/stats', [SettingController::class, 'stats']);
Route::get('/social', [SocialLinkController::class, 'social']);

Route::get('/whyChooseUs', [WhyChooseUsController::class, 'ShowAll']);

Route::get('/daily-offers', [DailyOfferController::class, 'ShowAll']);
Route::get('/products-by-category', [ProductController::class, 'getProductsByCategory']);

Route::get('/banner-slider', [BannerSliderController::class, 'ShowAll']);

Route::get('/chefs', [ChefController::class, 'ShowAll']);

Route::get('/testimonial', [TestimonialController::class, 'ShowAll']);
Route::get('/counter', [CounterController::class, 'ShowAll']);

Route::get('/footer', [FooterInfoController::class, 'ShowAll']);

Route::get('/product/{slug}', [ProductController::class, 'showBySlug']);
  Route::get('/product/category/{id}', [ProductController::class, 'getCategoryProducts']);
  Route::get('/products', [ProductController::class, 'ShowAllProducts']);
Route::get('/categories', [ProductController::class, 'showCategories1']);
Route::get('/delivery-areas', [DeliveryAreaController::class, 'GetAllArea']);
Route::post('/addresses', [AddressController::class, 'store']);
Route::post('/get-address', [AddressController::class, 'getAddress']);
Route::delete('/address/{id}', [AddressController::class, 'destroy']);
Route::get('/address/{id}', [AddressController::class, 'show']);
Route::put('/address/{id}', [AddressController::class, 'update']);


});




