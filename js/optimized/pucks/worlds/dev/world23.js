// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world23');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.shooter');
pucks.worlds.dev.world23.horizontal_wall = (function pucks$worlds$dev$world23$horizontal_wall(p__13882,y){
var vec__13883 = p__13882;
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13883,(0),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13883,(1),null);
var iter__4523__auto__ = ((function (vec__13883,x_min,x_max){
return (function pucks$worlds$dev$world23$horizontal_wall_$_iter__13886(s__13887){
return (new cljs.core.LazySeq(null,((function (vec__13883,x_min,x_max){
return (function (){
var s__13887__$1 = s__13887;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13887__$1);
if(temp__5735__auto__){
var s__13887__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13887__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13887__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13889 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13888 = (0);
while(true){
if((i__13888 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13888);
cljs.core.chunk_append(b__13889,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13890 = (i__13888 + (1));
i__13888 = G__13890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13889),pucks$worlds$dev$world23$horizontal_wall_$_iter__13886(cljs.core.chunk_rest(s__13887__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13889),null);
}
} else {
var x = cljs.core.first(s__13887__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world23$horizontal_wall_$_iter__13886(cljs.core.rest(s__13887__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13883,x_min,x_max))
,null,null));
});})(vec__13883,x_min,x_max))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(x_min,x_max,(20)));
});
pucks.worlds.dev.world23.vertical_wall = (function pucks$worlds$dev$world23$vertical_wall(x,p__13891){
var vec__13892 = p__13891;
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13892,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13892,(1),null);
var iter__4523__auto__ = ((function (vec__13892,y_min,y_max){
return (function pucks$worlds$dev$world23$vertical_wall_$_iter__13895(s__13896){
return (new cljs.core.LazySeq(null,((function (vec__13892,y_min,y_max){
return (function (){
var s__13896__$1 = s__13896;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13896__$1);
if(temp__5735__auto__){
var s__13896__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13896__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13896__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13898 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13897 = (0);
while(true){
if((i__13897 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13897);
cljs.core.chunk_append(b__13898,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13899 = (i__13897 + (1));
i__13897 = G__13899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13898),pucks$worlds$dev$world23$vertical_wall_$_iter__13895(cljs.core.chunk_rest(s__13896__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13898),null);
}
} else {
var y = cljs.core.first(s__13896__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world23$vertical_wall_$_iter__13895(cljs.core.rest(s__13896__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13892,y_min,y_max))
,null,null));
});})(vec__13892,y_min,y_max))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(y_min,y_max,(20)));
});
pucks.worlds.dev.world23.agents = (function pucks$worlds$dev$world23$agents(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.nursery.nursery(pucks.agents.shooter.shooter),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$solid,false], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$solid,false], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(100)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$solid,false], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(500)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$solid,false], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(266),(466)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$solid,false], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(466),(266)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$solid,false], 0))], null);
});
pucks.worlds.dev.world23.settings = (function pucks$worlds$dev$world23$settings(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$screen_DASH_size,(600),cljs.core.cst$kw$scale,1.0,cljs.core.cst$kw$single_DASH_thread_DASH_mode,false,cljs.core.cst$kw$nursery_DASH_threshold,(1000),cljs.core.cst$kw$neighborhood_DASH_size,(150),cljs.core.cst$kw$cost_DASH_of_DASH_collision,0.01], null);
});
