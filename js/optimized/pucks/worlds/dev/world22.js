// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world22');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.spanner');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
pucks.worlds.dev.world22.horizontal_wall = (function pucks$worlds$dev$world22$horizontal_wall(p__13279,y){
var vec__13280 = p__13279;
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13280,(0),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13280,(1),null);
var iter__4523__auto__ = ((function (vec__13280,x_min,x_max){
return (function pucks$worlds$dev$world22$horizontal_wall_$_iter__13283(s__13284){
return (new cljs.core.LazySeq(null,((function (vec__13280,x_min,x_max){
return (function (){
var s__13284__$1 = s__13284;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13284__$1);
if(temp__5735__auto__){
var s__13284__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13284__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13284__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13286 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13285 = (0);
while(true){
if((i__13285 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13285);
cljs.core.chunk_append(b__13286,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13287 = (i__13285 + (1));
i__13285 = G__13287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13286),pucks$worlds$dev$world22$horizontal_wall_$_iter__13283(cljs.core.chunk_rest(s__13284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13286),null);
}
} else {
var x = cljs.core.first(s__13284__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world22$horizontal_wall_$_iter__13283(cljs.core.rest(s__13284__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13280,x_min,x_max))
,null,null));
});})(vec__13280,x_min,x_max))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(x_min,x_max,(20)));
});
pucks.worlds.dev.world22.vertical_wall = (function pucks$worlds$dev$world22$vertical_wall(x,p__13288){
var vec__13289 = p__13288;
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13289,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13289,(1),null);
var iter__4523__auto__ = ((function (vec__13289,y_min,y_max){
return (function pucks$worlds$dev$world22$vertical_wall_$_iter__13292(s__13293){
return (new cljs.core.LazySeq(null,((function (vec__13289,y_min,y_max){
return (function (){
var s__13293__$1 = s__13293;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13293__$1);
if(temp__5735__auto__){
var s__13293__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13293__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13293__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13295 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13294 = (0);
while(true){
if((i__13294 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13294);
cljs.core.chunk_append(b__13295,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13296 = (i__13294 + (1));
i__13294 = G__13296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13295),pucks$worlds$dev$world22$vertical_wall_$_iter__13292(cljs.core.chunk_rest(s__13293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13295),null);
}
} else {
var y = cljs.core.first(s__13293__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world22$vertical_wall_$_iter__13292(cljs.core.rest(s__13293__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13289,y_min,y_max))
,null,null));
});})(vec__13289,y_min,y_max))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(y_min,y_max,(20)));
});
pucks.worlds.dev.world22.agents = (function pucks$worlds$dev$world22$agents(){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world22$agents_$_iter__13297(s__13298){
return (new cljs.core.LazySeq(null,(function (){
var s__13298__$1 = s__13298;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13298__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13298__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world22$agents_$_iter__13297_$_iter__13299(s__13300){
return (new cljs.core.LazySeq(null,((function (s__13298__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13300__$1 = s__13300;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13300__$1);
if(temp__5735__auto____$1){
var s__13300__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13300__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13300__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13302 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13301 = (0);
while(true){
if((i__13301 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13301);
cljs.core.chunk_append(b__13302,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mobile,false,cljs.core.cst$kw$solid,false], 0)));

var G__13309 = (i__13301 + (1));
i__13301 = G__13309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13302),pucks$worlds$dev$world22$agents_$_iter__13297_$_iter__13299(cljs.core.chunk_rest(s__13300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13302),null);
}
} else {
var y = cljs.core.first(s__13300__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mobile,false,cljs.core.cst$kw$solid,false], 0)),pucks$worlds$dev$world22$agents_$_iter__13297_$_iter__13299(cljs.core.rest(s__13300__$2)));
}
} else {
return null;
}
break;
}
});})(s__13298__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13298__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1200),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world22$agents_$_iter__13297(cljs.core.rest(s__13298__$1)));
} else {
var G__13310 = cljs.core.rest(s__13298__$1);
s__13298__$1 = G__13310;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1200),(200)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world22$agents_$_iter__13303(s__13304){
return (new cljs.core.LazySeq(null,(function (){
var s__13304__$1 = s__13304;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13304__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13304__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world22$agents_$_iter__13303_$_iter__13305(s__13306){
return (new cljs.core.LazySeq(null,((function (s__13304__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13306__$1 = s__13306;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13306__$1);
if(temp__5735__auto____$1){
var s__13306__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13306__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13306__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13308 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13307 = (0);
while(true){
if((i__13307 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13307);
cljs.core.chunk_append(b__13308,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.stone.stone(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mobile,false], 0)));

var G__13311 = (i__13307 + (1));
i__13307 = G__13311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13308),pucks$worlds$dev$world22$agents_$_iter__13303_$_iter__13305(cljs.core.chunk_rest(s__13306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13308),null);
}
} else {
var y = cljs.core.first(s__13306__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.stone.stone(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mobile,false], 0)),pucks$worlds$dev$world22$agents_$_iter__13303_$_iter__13305(cljs.core.rest(s__13306__$2)));
}
} else {
return null;
}
break;
}
});})(s__13304__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13304__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(1200),(100))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world22$agents_$_iter__13303(cljs.core.rest(s__13304__$1)));
} else {
var G__13312 = cljs.core.rest(s__13304__$1);
s__13304__$1 = G__13312;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(1200),(100)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.nursery.nursery(pucks.agents.spanner.spanner),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$solid,false], 0))], null)], 0)));
});
pucks.worlds.dev.world22.settings = (function pucks$worlds$dev$world22$settings(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$screen_DASH_size,(1200),cljs.core.cst$kw$scale,0.6,cljs.core.cst$kw$single_DASH_thread_DASH_mode,false,cljs.core.cst$kw$nursery_DASH_threshold,(1),cljs.core.cst$kw$neighborhood_DASH_size,(150),cljs.core.cst$kw$cost_DASH_of_DASH_collision,0.01], null);
});
