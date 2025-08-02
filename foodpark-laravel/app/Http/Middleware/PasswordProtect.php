<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PasswordProtect
{
    public function handle(Request $request, Closure $next): Response
    {
        dd('working');
        // If the session contains 'protected_access', allow access
        if (session()->has('protected_access')) {
            return $next($request);
        }

        // If the user submits the correct password, store it in the session
        if ($request->input('password') === 'admin123') {
            session(['protected_access' => true]);
            return redirect($request->url());
        }

        // If password is not set or incorrect, show the password form
        return response()->view('frontend.pages.password-protect');
    }
}
