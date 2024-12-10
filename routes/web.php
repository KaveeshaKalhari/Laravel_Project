<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontEndController;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/login', function(){
//     echo 'Mn Tharahayi oyath ekka <br/>';
//     echo '<b> ehema karanna epa. mn paw ne </b>';
// });

// Route::get('/about', function () {
//   return view('aboutus');
// });

Route::get('/about', [FrontEndController::class, 'indexaboutus']);

// Route::get('/contact', function () {
//     return view('contactus');
// });

Route::get('/contact', [FrontEndController::class, 'indexcontactus']);

//GET     -Reading data form server but not mutating(changing)
//POST    -Submit data and mutate server
//PUT     -Submit data and mutate server(edit) - Full submission
//PATCH   -Submit data and mutate server(partial edit) - partial submission
//DELETE  -Delete resources from the server
//OPTIONS -Route related to CORS(Cross Origin Resourse Sharing)
