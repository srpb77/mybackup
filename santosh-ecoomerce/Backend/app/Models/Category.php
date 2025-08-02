<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'status', 'show_at_home'];

    public function products()
{
    return $this->hasMany(Product::class, 'category_id'); // explicitly set foreign key if needed
}
}
