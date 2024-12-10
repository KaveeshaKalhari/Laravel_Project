<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FrontEndController extends Controller
{
    public function indexaboutus(){
        return view('aboutus');
    }

    public function indexcontactus(){
        return view('contactus');
    }
}
