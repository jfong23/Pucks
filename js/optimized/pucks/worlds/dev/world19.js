// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world19');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.active');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.vec2D');
goog.require('pucks.util');
goog.require('pucks.globals');
pucks.worlds.dev.world19.agents = (function pucks$worlds$dev$world19$agents(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.vent.vent(),pucks.agents.vent.vent(),pucks.agents.vent.vent(),pucks.agents.vent.vent(),pucks.agents.vent.vent(),pucks.agents.nursery.nursery((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rotation,cljs.core.rand.cljs$core$IFn$_invoke$arity$1(pucks.globals.two_pi),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(4.0) - 2.0),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(4.0) - 2.0)], null),cljs.core.cst$kw$proposal_DASH_function,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.2) - 0.1),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.2) - 0.1),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.2) - 0.1)], null),pucks.util.rotation__GT_relative_position(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p))], 0))),cljs.core.cst$kw$transfer,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world19$agents_$_iter__13638(s__13639){
return (new cljs.core.LazySeq(null,(function (){
var s__13639__$1 = s__13639;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13639__$1);
if(temp__5735__auto__){
var s__13639__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13639__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13639__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13641 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13640 = (0);
while(true){
if((i__13640 < size__4522__auto__)){
var anyone = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13640);
cljs.core.chunk_append(b__13641,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone)], null)], null));

var G__13646 = (i__13640 + (1));
i__13640 = G__13646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13641),pucks$worlds$dev$world19$agents_$_iter__13638(cljs.core.chunk_rest(s__13639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13641),null);
}
} else {
var anyone = cljs.core.first(s__13639__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone)], null)], null),pucks$worlds$dev$world19$agents_$_iter__13638(cljs.core.rest(s__13639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world19$agents_$_iter__13642(s__13643){
return (new cljs.core.LazySeq(null,(function (){
var s__13643__$1 = s__13643;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13643__$1);
if(temp__5735__auto__){
var s__13643__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13643__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13643__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13645 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13644 = (0);
while(true){
if((i__13644 < size__4522__auto__)){
var weaker = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13644);
cljs.core.chunk_append(b__13645,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(weaker),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null));

var G__13647 = (i__13644 + (1));
i__13644 = G__13647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13645),pucks$worlds$dev$world19$agents_$_iter__13642(cljs.core.chunk_rest(s__13643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13645),null);
}
} else {
var weaker = cljs.core.first(s__13643__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(weaker),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null),pucks$worlds$dev$world19$agents_$_iter__13642(cljs.core.rest(s__13643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__){
return (function (p1__13637_SHARP_){
return (cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p1__13637_SHARP_) < cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p));
});})(iter__4523__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p))));
})())], null);
})], null)], 0));
}))], null);
});
pucks.worlds.dev.world19.settings = (function pucks$worlds$dev$world19$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
