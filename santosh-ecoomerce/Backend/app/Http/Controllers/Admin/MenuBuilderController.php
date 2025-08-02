<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminMenuItem;
use Efectn\Menu\MenuBuilder;
use Illuminate\Http\Request;
use Illuminate\View\View;

class MenuBuilderController extends Controller
{
    function index() : View {
        return view('admin.menu-builder.index');
    }

   public function getMenu($menuId)
{
    try {
        $menu = AdminMenuItem::where('menu_id', $menuId)
            ->where('parent_id', 0)
            ->with('children')
            ->get();

        return response()->json($menu);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
}
