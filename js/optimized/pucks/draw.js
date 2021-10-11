// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.draw');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
/**
 * Sets the background color and calls the :draw-functions of all agents.
 */
pucks.draw.draw_agents = (function pucks$draw$draw_agents(){
quil.core.background.cljs$core$IFn$_invoke$arity$3((230),(180),(230));

var s_14280 = cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings));
quil.core.scale.cljs$core$IFn$_invoke$arity$2(s_14280,s_14280);

var seq__14156_14281 = cljs.core.seq(cljs.core.deref(pucks.globals.all_agents));
var chunk__14157_14282 = null;
var count__14158_14283 = (0);
var i__14159_14284 = (0);
while(true){
if((i__14159_14284 < count__14158_14283)){
var a_14285 = chunk__14157_14282.cljs$core$IIndexed$_nth$arity$2(null,i__14159_14284);
var fexpr__14162_14286 = cljs.core.cst$kw$draw_DASH_function.cljs$core$IFn$_invoke$arity$1(a_14285);
(fexpr__14162_14286.cljs$core$IFn$_invoke$arity$1 ? fexpr__14162_14286.cljs$core$IFn$_invoke$arity$1(a_14285) : fexpr__14162_14286.call(null,a_14285));


var G__14287 = seq__14156_14281;
var G__14288 = chunk__14157_14282;
var G__14289 = count__14158_14283;
var G__14290 = (i__14159_14284 + (1));
seq__14156_14281 = G__14287;
chunk__14157_14282 = G__14288;
count__14158_14283 = G__14289;
i__14159_14284 = G__14290;
continue;
} else {
var temp__5735__auto___14291 = cljs.core.seq(seq__14156_14281);
if(temp__5735__auto___14291){
var seq__14156_14292__$1 = temp__5735__auto___14291;
if(cljs.core.chunked_seq_QMARK_(seq__14156_14292__$1)){
var c__4550__auto___14293 = cljs.core.chunk_first(seq__14156_14292__$1);
var G__14294 = cljs.core.chunk_rest(seq__14156_14292__$1);
var G__14295 = c__4550__auto___14293;
var G__14296 = cljs.core.count(c__4550__auto___14293);
var G__14297 = (0);
seq__14156_14281 = G__14294;
chunk__14157_14282 = G__14295;
count__14158_14283 = G__14296;
i__14159_14284 = G__14297;
continue;
} else {
var a_14298 = cljs.core.first(seq__14156_14292__$1);
var fexpr__14163_14299 = cljs.core.cst$kw$draw_DASH_function.cljs$core$IFn$_invoke$arity$1(a_14298);
(fexpr__14163_14299.cljs$core$IFn$_invoke$arity$1 ? fexpr__14163_14299.cljs$core$IFn$_invoke$arity$1(a_14298) : fexpr__14163_14299.call(null,a_14298));


var G__14300 = cljs.core.next(seq__14156_14292__$1);
var G__14301 = null;
var G__14302 = (0);
var G__14303 = (0);
seq__14156_14281 = G__14300;
chunk__14157_14282 = G__14301;
count__14158_14283 = G__14302;
i__14159_14284 = G__14303;
continue;
}
} else {
}
}
break;
}

var agent_map = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.deref(pucks.globals.all_agents)),cljs.core.deref(pucks.globals.all_agents));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((196));

quil.core.stroke_weight((2));

var seq__14164_14304 = cljs.core.seq(cljs.core.deref(pucks.globals.all_agents));
var chunk__14165_14305 = null;
var count__14166_14306 = (0);
var i__14167_14307 = (0);
while(true){
if((i__14167_14307 < count__14166_14306)){
var a_14308 = chunk__14165_14305.cljs$core$IIndexed$_nth$arity$2(null,i__14167_14307);
var seq__14224_14309 = cljs.core.seq(cljs.core.cst$kw$bound_DASH_to.cljs$core$IFn$_invoke$arity$1(a_14308));
var chunk__14225_14310 = null;
var count__14226_14311 = (0);
var i__14227_14312 = (0);
while(true){
if((i__14227_14312 < count__14226_14311)){
var bound_id_14313 = chunk__14225_14310.cljs$core$IIndexed$_nth$arity$2(null,i__14227_14312);
var vec__14240_14314 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_14308);
var ax_14315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14240_14314,(0),null);
var ay_14316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14240_14314,(1),null);
var vec__14243_14317 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_14313));
var bx_14318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14243_14317,(0),null);
var by_14319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14243_14317,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_14315,ay_14316], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_14318,by_14319], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_14315,ay_14316], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_14318,by_14319], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_14315,ay_14316,bx_14318,by_14319);
} else {
}


var G__14320 = seq__14224_14309;
var G__14321 = chunk__14225_14310;
var G__14322 = count__14226_14311;
var G__14323 = (i__14227_14312 + (1));
seq__14224_14309 = G__14320;
chunk__14225_14310 = G__14321;
count__14226_14311 = G__14322;
i__14227_14312 = G__14323;
continue;
} else {
var temp__5735__auto___14324 = cljs.core.seq(seq__14224_14309);
if(temp__5735__auto___14324){
var seq__14224_14325__$1 = temp__5735__auto___14324;
if(cljs.core.chunked_seq_QMARK_(seq__14224_14325__$1)){
var c__4550__auto___14326 = cljs.core.chunk_first(seq__14224_14325__$1);
var G__14327 = cljs.core.chunk_rest(seq__14224_14325__$1);
var G__14328 = c__4550__auto___14326;
var G__14329 = cljs.core.count(c__4550__auto___14326);
var G__14330 = (0);
seq__14224_14309 = G__14327;
chunk__14225_14310 = G__14328;
count__14226_14311 = G__14329;
i__14227_14312 = G__14330;
continue;
} else {
var bound_id_14331 = cljs.core.first(seq__14224_14325__$1);
var vec__14246_14332 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_14308);
var ax_14333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14246_14332,(0),null);
var ay_14334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14246_14332,(1),null);
var vec__14249_14335 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_14331));
var bx_14336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249_14335,(0),null);
var by_14337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249_14335,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_14333,ay_14334], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_14336,by_14337], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_14333,ay_14334], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_14336,by_14337], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_14333,ay_14334,bx_14336,by_14337);
} else {
}


var G__14338 = cljs.core.next(seq__14224_14325__$1);
var G__14339 = null;
var G__14340 = (0);
var G__14341 = (0);
seq__14224_14309 = G__14338;
chunk__14225_14310 = G__14339;
count__14226_14311 = G__14340;
i__14227_14312 = G__14341;
continue;
}
} else {
}
}
break;
}


var G__14342 = seq__14164_14304;
var G__14343 = chunk__14165_14305;
var G__14344 = count__14166_14306;
var G__14345 = (i__14167_14307 + (1));
seq__14164_14304 = G__14342;
chunk__14165_14305 = G__14343;
count__14166_14306 = G__14344;
i__14167_14307 = G__14345;
continue;
} else {
var temp__5735__auto___14346 = cljs.core.seq(seq__14164_14304);
if(temp__5735__auto___14346){
var seq__14164_14347__$1 = temp__5735__auto___14346;
if(cljs.core.chunked_seq_QMARK_(seq__14164_14347__$1)){
var c__4550__auto___14348 = cljs.core.chunk_first(seq__14164_14347__$1);
var G__14349 = cljs.core.chunk_rest(seq__14164_14347__$1);
var G__14350 = c__4550__auto___14348;
var G__14351 = cljs.core.count(c__4550__auto___14348);
var G__14352 = (0);
seq__14164_14304 = G__14349;
chunk__14165_14305 = G__14350;
count__14166_14306 = G__14351;
i__14167_14307 = G__14352;
continue;
} else {
var a_14353 = cljs.core.first(seq__14164_14347__$1);
var seq__14252_14354 = cljs.core.seq(cljs.core.cst$kw$bound_DASH_to.cljs$core$IFn$_invoke$arity$1(a_14353));
var chunk__14253_14355 = null;
var count__14254_14356 = (0);
var i__14255_14357 = (0);
while(true){
if((i__14255_14357 < count__14254_14356)){
var bound_id_14358 = chunk__14253_14355.cljs$core$IIndexed$_nth$arity$2(null,i__14255_14357);
var vec__14268_14359 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_14353);
var ax_14360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14268_14359,(0),null);
var ay_14361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14268_14359,(1),null);
var vec__14271_14362 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_14358));
var bx_14363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14271_14362,(0),null);
var by_14364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14271_14362,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_14360,ay_14361], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_14363,by_14364], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_14360,ay_14361], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_14363,by_14364], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_14360,ay_14361,bx_14363,by_14364);
} else {
}


var G__14365 = seq__14252_14354;
var G__14366 = chunk__14253_14355;
var G__14367 = count__14254_14356;
var G__14368 = (i__14255_14357 + (1));
seq__14252_14354 = G__14365;
chunk__14253_14355 = G__14366;
count__14254_14356 = G__14367;
i__14255_14357 = G__14368;
continue;
} else {
var temp__5735__auto___14369__$1 = cljs.core.seq(seq__14252_14354);
if(temp__5735__auto___14369__$1){
var seq__14252_14370__$1 = temp__5735__auto___14369__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14252_14370__$1)){
var c__4550__auto___14371 = cljs.core.chunk_first(seq__14252_14370__$1);
var G__14372 = cljs.core.chunk_rest(seq__14252_14370__$1);
var G__14373 = c__4550__auto___14371;
var G__14374 = cljs.core.count(c__4550__auto___14371);
var G__14375 = (0);
seq__14252_14354 = G__14372;
chunk__14253_14355 = G__14373;
count__14254_14356 = G__14374;
i__14255_14357 = G__14375;
continue;
} else {
var bound_id_14376 = cljs.core.first(seq__14252_14370__$1);
var vec__14274_14377 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_14353);
var ax_14378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274_14377,(0),null);
var ay_14379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274_14377,(1),null);
var vec__14277_14380 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_14376));
var bx_14381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14277_14380,(0),null);
var by_14382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14277_14380,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_14378,ay_14379], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_14381,by_14382], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_14378,ay_14379], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_14381,by_14382], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_14378,ay_14379,bx_14381,by_14382);
} else {
}


var G__14383 = cljs.core.next(seq__14252_14370__$1);
var G__14384 = null;
var G__14385 = (0);
var G__14386 = (0);
seq__14252_14354 = G__14383;
chunk__14253_14355 = G__14384;
count__14254_14356 = G__14385;
i__14255_14357 = G__14386;
continue;
}
} else {
}
}
break;
}


var G__14387 = cljs.core.next(seq__14164_14347__$1);
var G__14388 = null;
var G__14389 = (0);
var G__14390 = (0);
seq__14164_14304 = G__14387;
chunk__14165_14305 = G__14388;
count__14166_14306 = G__14389;
i__14167_14307 = G__14390;
continue;
}
} else {
}
}
break;
}

return quil.core.no_stroke();
});
