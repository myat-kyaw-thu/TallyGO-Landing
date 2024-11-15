<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public  function index()
    {
        $jobs = Job::with("employer")->latest()->simplePaginate(3);

        return view("job.index", compact("jobs"));
    }
    public  function  create()
    {
        return view("job.create");
    }
    public  function store(Request $request)
    {
        request()->validate([
            "title" => ["required", 'min:3'],
            'salary' => ['required'],
        ]);
        Job::create([
            "title" => $request["title"],
            "salary" => $request["salary"],
            "employer_id" => 1,
        ]);
        return redirect("/jobs");
    }

    public  function show(Job  $job) // route model binding
    {
        return view("job.show", compact("job"));
    }

    public  function edit(Job $job)
    {
    return view("job.edit" , compact("job"));
    }
    public  function update(Job $job)
    {
        request()->validate([
            "title" => ["required", 'min:3'],
            "salary' => ['required'],"
        ]);
        $job->update([
            "title" => request("title"),
            "salary" =>request("salary"),
        ]);
        return redirect("/jobs/$job->id");
    }

    public function destroy(Job $job)
    {
        $job->delete();

        return redirect('/jobs');
    }
}
