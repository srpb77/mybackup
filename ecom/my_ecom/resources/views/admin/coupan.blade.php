@extends('admin/layout')
@section('container')
@section('coupan_select','active')
<div class="row">
                           
<div class="col-lg-12">
                                <h2 class="title-1 m-b-25">Coupan</h2>
                               @if(session()->has('message'))
                                <div class="sufee-alert alert with-close alert-success alert-dismissible fade show">
                                            <span class="badge badge-pill badge-success">{{session('message')}}</span>
                                            You successfully read this important alert.
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                        @endif
                                <button class="btn btn-danger" type="submit" style="float:right;margin-bottom:10px;color:#fff;"><a href="{{url('admin/coupan/manage_coupan')}}">Add Coupan</a></button>
                                <div class="table-responsive table--no-card m-b-40">
                                    <table class="table table-borderless table-striped table-earning">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Title</th>
                                                <th>Code</th>
                                                <th>Value</th>
                                                <th>Action</th>
                                              
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($data as $list)
                                            <tr>
                                                <td>{{$list->id}}</td>
                                                <td>{{$list->title}}</td>
                                                <td>{{$list->code}}</td>
                                                  <td>{{$list->value}}</td>
                                                
                                                <td>
<a href="{{url('admin/coupan/manage_coupan')}}/{{$list->id}}"><button class="btn btn-success" type="submit">Edit</button></a>

@if($list->status==1)
<a href="{{url('admin/coupan/status/0')}}/{{$list->id}}"><button class="btn btn-primary" type="submit">Active</button></a>
@elseif($list->status==0)
<a href="{{url('admin/coupan/status/1')}}/{{$list->id}}"><button class="btn btn-danger" type="submit">Deactive</button></a>
@endif
<a href="{{url('admin/coupan/delete')}}/{{$list->id}}"><button class="btn btn-danger" type="submit">Delete</button></a>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
</div>
@endsection