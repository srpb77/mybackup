<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Address;
use Auth;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'delivery_area_id' => 'required|exists:delivery_areas,id',
        'first_name'       => 'required|string|max:255',
        'last_name'        => 'nullable|string|max:255',
        'email'            => 'required|email',
        'phone'            => 'required|string|max:20',
        'address'          => 'required|string',
        'type'             => 'required|string|in:home,office',
        'user_id'          => 'required|exists:users,id', // optional: for testing
    ]);

    $address = Address::create([
        'user_id'          => $validated['user_id'],
        'delivery_area_id' => $validated['delivery_area_id'],
        'first_name'       => $validated['first_name'],
        'last_name'        => $validated['last_name'],
        'email'            => $validated['email'],
        'phone'            => $validated['phone'],
        'address'          => $validated['address'],
        'type'             => $validated['type'],
    ]);

    // Return proper JSON response
    return response()->json([
        'success' => true,
        'message' => 'Address created successfully',
        'data'    => $address
    ]);
}


public function getAddress(Request $request)
{
    $userId = $request->input('user_id');

    $addresses = Address::where('user_id', $userId)->get();

    return response()->json($addresses);
}


    /**
     * Display the specified resource.
     */
public function show($id)
{
    $address = Address::find($id);

    if (!$address) {
        return response()->json(['message' => 'Address not found'], 404);
    }

    return response()->json($address);
}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
public function update(Request $request, $id)
{
    $address = Address::findOrFail($id); // 404 if not found
    $address->update($request->all());

    return response()->json(['message' => 'Address updated successfully']);
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    $address = Address::find($id);

    if (!$address) {
        return response()->json(['message' => 'Address not found'], 404);
    }

    $address->delete();

    return response()->json(['message' => 'Address deleted successfully'], 200);
}
}
