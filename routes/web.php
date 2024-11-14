<?php

use Illuminate\Support\Facades\Route;
use App\Models\Job;

Route::get('/', function () {
    return view('home');
});

//index
Route::get('/jobs', function () {
    $jobs = Job::with('employer')->latest()->simplePaginate(3);

    return view('job.index', compact('jobs'), [
        'jobs' => $jobs
    ]);
});

//create

//that will get errors with wrong request in job-detail becuase first route access whatever jobs/--- string or int
//solution is make this in upper
Route::get('/jobs/create', function () {

    return view('job.create');
});

//Show
Route::get('/jobs/{id}', function ($id) {
    $job = Job::find($id);

    return view('job.show', ['job' => $job]);
});

//Store
Route::post('/jobs', function () {
    // validation...
    request()->validate([
        'title' => ['required', 'min:3'],
        'salary' => ['required']
    ]);
    Job::create([
        'title' => request('title'),
        'salary' => request('salary'),
        'employer_id' => 1
    ]);

    return redirect('/jobs');
});

//edit
Route::get('/jobs/{id}/edit', function ($id) {
    $job = Job::find($id);
    return view('job.edit', ['job' => $job]);
});
Route::patch('/jobs/{id}', function ($id) {
    request()->validate([
        'title' => ['required', 'min:3'],
        'salary' => ['required']
    ]);
    //authorize

    $job = Job::findOrFail($id);
    $job->update([
        'title' => request('title'),
        'salary' => request('salary')
    ]);
    return redirect("/jobs/$id");
});

//Destory
Route::delete('/jobs/{id}', function ($id) {

    //authorize

    Job::destroy($id);
    return redirect('/jobs');
});


Route::get('/contact', function () {
    return view('contact');
});


