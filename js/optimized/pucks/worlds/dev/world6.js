// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world6');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.zigzag');
goog.require('pucks.agents.startstop');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.linear');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.swarmer');
goog.require('pucks.agents.beacon');
pucks.worlds.dev.world6.agents = (function pucks$worlds$dev$world6$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world6$agents_$_iter__13991(s__13992){
return (new cljs.core.LazySeq(null,(function (){
var s__13992__$1 = s__13992;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13992__$1);
if(temp__5735__auto__){
var s__13992__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13992__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13992__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13994 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13993 = (0);
while(true){
if((i__13993 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13993);
cljs.core.chunk_append(b__13994,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__13999 = (i__13993 + (1));
i__13993 = G__13999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13994),pucks$worlds$dev$world6$agents_$_iter__13991(cljs.core.chunk_rest(s__13992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13994),null);
}
} else {
var y = cljs.core.first(s__13992__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world6$agents_$_iter__13991(cljs.core.rest(s__13992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((15),cljs.core.iterate(((function (iter__4523__auto__){
return (function (p1__13989_SHARP_){
return (p1__13989_SHARP_ + (20));
});})(iter__4523__auto__))
,(100))));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world6$agents_$_iter__13995(s__13996){
return (new cljs.core.LazySeq(null,(function (){
var s__13996__$1 = s__13996;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13996__$1);
if(temp__5735__auto__){
var s__13996__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13996__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13996__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13998 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13997 = (0);
while(true){
if((i__13997 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13997);
cljs.core.chunk_append(b__13998,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)], 0)));

var G__14000 = (i__13997 + (1));
i__13997 = G__14000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13998),pucks$worlds$dev$world6$agents_$_iter__13995(cljs.core.chunk_rest(s__13996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13998),null);
}
} else {
var x = cljs.core.first(s__13996__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)], 0)),pucks$worlds$dev$world6$agents_$_iter__13995(cljs.core.rest(s__13996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.iterate(((function (iter__4523__auto__){
return (function (p1__13990_SHARP_){
return (p1__13990_SHARP_ + (20));
});})(iter__4523__auto__))
,(500))));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(650),(687)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(550),(687)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(400)], null),cljs.core.cst$kw$id,cljs.core.cst$sym$AREA_DASH_B], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(600)], null),cljs.core.cst$kw$id,cljs.core.cst$sym$AREA_DASH_A], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.linear.linear),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(500)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.swarmer.swarmer),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(650)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.startstop.startstop(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null)], null)], 0));
})),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.zigzag.zigzag),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world6.settings = (function pucks$worlds$dev$world6$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
