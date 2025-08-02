<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminMenuItem extends Model
{
    protected $table = 'admin_menu_items';

    public function children()
    {
        return $this->hasMany(AdminMenuItem::class, 'parent_id', 'id')->with('children');
    }
}