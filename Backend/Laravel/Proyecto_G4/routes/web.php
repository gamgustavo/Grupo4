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
Route::get('Insertar_Actividad', 'MasterDeveloper@InsertarActividad');
Route::get('Devolver_Actividad/{id}', 'MasterDeveloper@DevolverActividad');
Route::get('DevolverListadoHijos/{id}', 'MasterDeveloper@DevolverListadoHijos');
Route::get('DevolverNotaEstudiante/{id}', 'MasterDeveloper@DevolverNotaEstudiante');
Route::get('DevolverMejoresNotas', 'MasterDeveloper@DevolverMejoresNotas');
Route::get('DevolverCatedraticos', 'MasterDeveloper@DevolverCatedraticos');
Route::get('DevolverHorarioEstudiante/{id}', 'MasterDeveloper@DevolverHorarioEstudiante');
Route::get('InsertarAsignacionCatedratico', 'MasterDeveloper@InsertarAsignacionCatedratico');