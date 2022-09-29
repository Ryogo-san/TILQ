<?php

namespace App\Models;

use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    use UsesUuid;

    protected $fillable = [
        'title',
        'body',
        'user_id',
        'accessibility_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function accessibility()
    {
        return $this->belongsTo('App\Models\Accessibility');
    }
}
