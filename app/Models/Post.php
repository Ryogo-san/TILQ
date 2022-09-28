<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UsesUuid;

class Post extends Model
{
    use HasFactory;
    use UsesUuid;
    //protected $primaryKey = 'id';
    /// オートインクリメント無効化
    //public $incrementing = false;
    /// Laravel 6.0+以降なら指定
    //protected $keyType = 'string';

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function accessibility()
    {
        return $this->belongsTo('App\Models\Accessibility');
    }
}
