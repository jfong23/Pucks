// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world8');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('pucks.util');
goog.require('pucks.agents.linear');
pucks.worlds.dev.world8.agents = (function pucks$worlds$dev$world8$agents(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.linear.linear(),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null),cljs.core.cst$kw$rotation,pucks.globals.half_pi,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),cljs.core.cst$kw$inventory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thing], null),cljs.core.cst$kw$proposal_DASH_function,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$transfer,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world8$agents_$_iter__14096(s__14097){
return (new cljs.core.LazySeq(null,(function (){
var s__14097__$1 = s__14097;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14097__$1);
if(temp__5735__auto__){
var s__14097__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14097__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14097__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14099 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14098 = (0);
while(true){
if((i__14098 < size__4522__auto__)){
var anyone = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14098);
cljs.core.chunk_append(b__14099,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$thing], null),cljs.core.cst$kw$ask,((function (i__14098,anyone,c__4521__auto__,size__4522__auto__,b__14099,s__14097__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
return cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(your_bid));
});})(i__14098,anyone,c__4521__auto__,size__4522__auto__,b__14099,s__14097__$2,temp__5735__auto__))
], null));

var G__14104 = (i__14098 + (1));
i__14098 = G__14104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14099),pucks$worlds$dev$world8$agents_$_iter__14096(cljs.core.chunk_rest(s__14097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14099),null);
}
} else {
var anyone = cljs.core.first(s__14097__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$thing], null),cljs.core.cst$kw$ask,((function (anyone,s__14097__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
return cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(your_bid));
});})(anyone,s__14097__$2,temp__5735__auto__))
], null),pucks$worlds$dev$world8$agents_$_iter__14096(cljs.core.rest(s__14097__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p));
})()], null);
})], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.linear.linear(),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(700)], null),cljs.core.cst$kw$rotation,(0),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$secret,cljs.core.cst$kw$foo], null),cljs.core.cst$kw$proposal_DASH_function,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$transfer,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world8$agents_$_iter__14100(s__14101){
return (new cljs.core.LazySeq(null,(function (){
var s__14101__$1 = s__14101;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14101__$1);
if(temp__5735__auto__){
var s__14101__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14101__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14101__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14103 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14102 = (0);
while(true){
if((i__14102 < size__4522__auto__)){
var anyone = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14102);
cljs.core.chunk_append(b__14103,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$secret,cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p))], null)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$thing], null)], null));

var G__14105 = (i__14102 + (1));
i__14102 = G__14105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14103),pucks$worlds$dev$world8$agents_$_iter__14100(cljs.core.chunk_rest(s__14101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14103),null);
}
} else {
var anyone = cljs.core.first(s__14101__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$secret,cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p))], null)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$thing], null)], null),pucks$worlds$dev$world8$agents_$_iter__14100(cljs.core.rest(s__14101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p));
})()], null);
})], null)], 0))], null);
});
pucks.worlds.dev.world8.settings = (function pucks$worlds$dev$world8$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
