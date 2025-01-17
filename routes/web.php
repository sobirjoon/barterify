<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/marketplace', function () {
    return Inertia::render('Home');
});

// Dashboard subroutes
Route::prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/listings', [ListingController::class, 'index'])->name('listings');
    Route::get('/trades', [TradeController::class, 'index'])->name('trades');
    Route::get('/history', [HistoryController::class, 'index'])->name('history');
    Route::get('/requests', [RequestController::class, 'index'])->name('requests');
    Route::get('/messages', [MessageController::class, 'index'])->name('messages');
    Route::get('/settings', [SettingController::class, 'index'])->name('settings');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
