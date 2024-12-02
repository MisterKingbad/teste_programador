<?php

use App\Http\Controllers\ComunicadoController;
use Illuminate\Support\Facades\Route;

Route::get('/comunicados', [ComunicadoController::class, 'index']);
Route::post('/comunicados', [ComunicadoController::class, 'store']);
Route::put('/comunicados/{id}', [ComunicadoController::class, 'update']);
Route::patch('/comunicados/{id}/republicar', [ComunicadoController::class, 'republicar']);
Route::delete('/comunicados/{id}', [ComunicadoController::class, 'destroy']);
