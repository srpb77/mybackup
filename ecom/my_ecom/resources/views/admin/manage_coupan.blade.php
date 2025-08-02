@extends('admin/layout')
@section('container')
@section('coupan_select','active')
<div class="row">
                           
<div class="col-lg-12">
    <h2 class="title-1 m-b-25">Manage Coupan</h2>
                                <button class="btn btn-danger" type="submit" style="float:right;margin-bottom:10px;color:#fff;"><a href="{{url('admin/coupan')}}">Back</a></button>
                            
                                <div class="table-responsive table--no-card m-b-40">
                              <div class="row">

                           <div class="col-lg-12">
                             
                                <div class="card">
                                    <div class="card-header">Manage Coupan</div>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h3 class="text-center title-2">Manage Coupan</h3>
                                        </div>
                                        
                                        <form action="{{route('coupan.manage_coupan_process')}}" method="post">
                                            @csrf
                                            <div class="form-group">
                                                <label for="title" class="control-label mb-1">Title</label>
                                                <input id="title" name="title" value="{{$title}}"  type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                                @error('title')

                                                    {{$message}}

                                                @enderror
                                            </div>

                                          
                                             <div class="form-group">
                                                <label for="code" class="control-label mb-1">Code</label>
                                                <input id="code" name="code" value="{{$code}}"  type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                                 @error('code')

                                                    {{$message}}

                                                @enderror
                                            </div>

                                             <div class="form-group">
                                                <label for="value" class="control-label mb-1">Value</label>
                                                <input id="value" name="value" value="{{$value}}"  type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                                 @error('value')

                                                    {{$message}}

                                                @enderror
                                            </div>
                                            <div>
                                                <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block">
                                                   Submit
                                                </button>
                                                <input type="hidden" name="id" value="{{$id}}">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
</div>
@endsection