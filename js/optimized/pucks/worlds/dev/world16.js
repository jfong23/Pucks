// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world16');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.active');
goog.require('pucks.agents.mapdonor');
goog.require('pucks.vec2D');
goog.require('pucks.util');
/**
 * Returns a positive or negative random number with magnitude less than n.
 */
pucks.worlds.dev.world16.rand_PLUS__ = (function pucks$worlds$dev$world16$rand_PLUS__(n){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * n)) - n);
});
pucks.worlds.dev.world16.agents = (function pucks$worlds$dev$world16$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world16$agents_$_iter__14003(s__14004){
return (new cljs.core.LazySeq(null,(function (){
var s__14004__$1 = s__14004;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14004__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__14004__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world16$agents_$_iter__14003_$_iter__14005(s__14006){
return (new cljs.core.LazySeq(null,((function (s__14004__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__14006__$1 = s__14006;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14006__$1);
if(temp__5735__auto____$1){
var s__14006__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14006__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14006__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14008 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14007 = (0);
while(true){
if((i__14007 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14007);
cljs.core.chunk_append(b__14008,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$radius,(70)], null)], 0)));

var G__14009 = (i__14007 + (1));
i__14007 = G__14009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14008),pucks$worlds$dev$world16$agents_$_iter__14003_$_iter__14005(cljs.core.chunk_rest(s__14006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14008),null);
}
} else {
var y = cljs.core.first(s__14006__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$radius,(70)], null)], 0)),pucks$worlds$dev$world16$agents_$_iter__14003_$_iter__14005(cljs.core.rest(s__14006__$2)));
}
} else {
return null;
}
break;
}
});})(s__14004__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__14004__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(751),(100))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world16$agents_$_iter__14003(cljs.core.rest(s__14004__$1)));
} else {
var G__14010 = cljs.core.rest(s__14004__$1);
s__14004__$1 = G__14010;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(751),(100)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(400)], null)], null)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.mapdonor.mapdonor(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$proposal_DASH_function,(function (p){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acceleration,(1),cljs.core.cst$kw$rotation,(function (){var the_map = cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p));
var vent_on_map = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vent,the_map));
var sensed_beacon = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$beacon,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
var sensed_vent = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vent,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
if(cljs.core.truth_(sensed_vent)){
return pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(sensed_vent));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = the_map;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = vent_on_map;
if(cljs.core.truth_(and__4120__auto____$1)){
return sensed_beacon;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return pucks.util.relative_position__GT_rotation(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(vent_on_map),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(sensed_beacon)], 0)));
} else {
return pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p));
}
}
})()], null);
}),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null),cljs.core.cst$kw$rotation,(0),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world16.settings = (function pucks$worlds$dev$world16$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
