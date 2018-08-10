<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/ 

Route::get('/', function () {
    return view('welcome');
});


Route::get('Devolver_Cursos', 'MasterDeveloper@DevolverCursos');
Route::get('Devolver_Estudiantes', 'MasterDeveloper@DevolverEstudiantes');
Route::get('Nota_Curso/{id}', 'MasterDeveloper@DevolverNotasCurso');
Route::get('Insertar_Nota', 'MasterDeveloper@InsertarNota');
Route::get('Modificar_Nota', 'MasterDeveloper@ModificarNota');


Route::get('Ingreso_Notas', 'Developer2@Ingreso_Notas');


Route::get('Listado_Notas', 'Developer3@Listado_Notas');


Route::get('Modificar_Nota', 'Developer4@Modificar_Nota');