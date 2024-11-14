<?php

use Illuminate\Support\Facades\Route;
use App\Models\Job;

Route::get('/', function () {
    return view('home');
});

Route::get('/jobs', function () {
    $jobs = Job::with('employer')->latest()->simplePaginate(3);

    return view('job.index', compact('jobs'), [
        'jobs' => $jobs
    ]);
});


//that will get errors with wrong request in job-detail becuase first route access whatever jobs/--- string or int
//solution is make this in upper
Route::get('/jobs/create', function () {

    return view('job.create');
});
Route::post('/jobs', function () {
    // validation...

    Job::create([
        'title' => request('title'),
        'salary' => request('salary'),
        'employer_id' => 1
    ]);

    return redirect('/jobs');
});

Route::get('/jobs/{id}', function ($id) {
    $job = Job::find($id);

    return view('job.show', ['job' => $job]);
});


Route::get('/contact', function () {
    return view('contact');
});


