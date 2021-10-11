// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.spanner');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
/**
 * Returns a random relative-position vector.
 */
pucks.agents.spanner.rand_relative_position = (function pucks$agents$spanner$rand_relative_position(){
return pucks.util.rotation__GT_relative_position((cljs.core.rand.cljs$core$IFn$_invoke$arity$1(pucks.globals.two_pi) - pucks.globals.pi));
});
/**
 * Returns a random urge level, which will be between -1.0 and 1.0.
 */
pucks.agents.spanner.rand_urge = (function pucks$agents$spanner$rand_urge(){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(2.0) - 1.0);
});
/**
 * Returns a random probability between 0 and 1.0.
 */
pucks.agents.spanner.rand_probability = (function pucks$agents$spanner$rand_probability(){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1(1.0);
});
/**
 * Returns a random color.
 */
pucks.agents.spanner.rand_color = (function pucks$agents$spanner$rand_color(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((256)),cljs.core.rand_int((256)),cljs.core.rand_int((256))], null);
});
/**
 * Returns a random color difference (an integer between 0 and 255).
 */
pucks.agents.spanner.rand_color_difference = (function pucks$agents$spanner$rand_color_difference(){
return cljs.core.rand_int((256));
});
pucks.agents.spanner.self = (function pucks$agents$spanner$self(p1,p2,tolerance,color_key){

var vec__13247 = (color_key.cljs$core$IFn$_invoke$arity$1 ? color_key.cljs$core$IFn$_invoke$arity$1(p1) : color_key.call(null,p1));
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13247,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13247,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13247,(2),null);
var vec__13250 = (color_key.cljs$core$IFn$_invoke$arity$1 ? color_key.cljs$core$IFn$_invoke$arity$1(p2) : color_key.call(null,p2));
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(2),null);
return ((((function (){var G__13256 = (r1 - r2);
return Math.abs(G__13256);
})() < tolerance)) && (((function (){var G__13257 = (g1 - g2);
return Math.abs(G__13257);
})() < tolerance)) && (((function (){var G__13258 = (b1 - b2);
return Math.abs(G__13258);
})() < tolerance)));
});
pucks.agents.spanner.facing = (function pucks$agents$spanner$facing(p1,p2){

return (pucks.util.rotational_difference(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p1),pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p2))) < pucks.globals.quarter_pi);
});
pucks.agents.spanner.spanner_proposals = (function pucks$agents$spanner$spanner_proposals(p){
var temp__5733__auto__ = cljs.core.cst$kw$genome.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p));
if(cljs.core.truth_(temp__5733__auto__)){
var g = temp__5733__auto__;
var selves = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (g,temp__5733__auto__){
return (function (p1__13259_SHARP_){
return pucks.agents.spanner.self(p,p1__13259_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$color);
});})(g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
var others = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selves,g,temp__5733__auto__){
return (function (p1__13260_SHARP_){
return (!(pucks.agents.spanner.self(p,p1__13260_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$color)));
});})(selves,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
var vents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vent,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
var zappers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zapper,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,0.1,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$eye_DASH_color,cljs.core.cst$kw$eye_DASH_color.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$core_DASH_color,cljs.core.cst$kw$core_DASH_color.cljs$core$IFn$_invoke$arity$1(g)], null),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.util.rotation__GT_relative_position(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p)),((cljs.core.empty_QMARK_(selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$self_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,selves)))], 0))),((cljs.core.empty_QMARK_(others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$other_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,others)))], 0))),((cljs.core.empty_QMARK_(selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$self_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,selves)))], 0))),((cljs.core.empty_QMARK_(others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$other_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,others)))], 0))),((cljs.core.empty_QMARK_(vents))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vent_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,vents)))], 0))),((cljs.core.empty_QMARK_(zappers))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$zapper_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,zappers)))], 0))),pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$random_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.agents.spanner.rand_relative_position()], 0))], 0)))], null),((((cljs.core.cst$kw$spawn_DASH_probability.cljs$core$IFn$_invoke$arity$1(g) * 0.1) > cljs.core.rand.cljs$core$IFn$_invoke$arity$0()))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spawn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__13264 = cljs.core.cst$kw$spawn_DASH_function.cljs$core$IFn$_invoke$arity$1(p);
return (fexpr__13264.cljs$core$IFn$_invoke$arity$1 ? fexpr__13264.cljs$core$IFn$_invoke$arity$1(p) : fexpr__13264.call(null,p));
})()], null)], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transfer,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4523__auto__ = ((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function pucks$agents$spanner$spanner_proposals_$_iter__13265(s__13266){
return (new cljs.core.LazySeq(null,((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function (){
var s__13266__$1 = s__13266;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13266__$1);
if(temp__5735__auto__){
var s__13266__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13266__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13266__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13268 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13267 = (0);
while(true){
if((i__13267 < size__4522__auto__)){
var binder = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13267);
cljs.core.chunk_append(b__13268,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder)], null)], null));

var G__13273 = (i__13267 + (1));
i__13267 = G__13273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13268),pucks$agents$spanner$spanner_proposals_$_iter__13265(cljs.core.chunk_rest(s__13266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13268),null);
}
} else {
var binder = cljs.core.first(s__13266__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder)], null)], null),pucks$agents$spanner$spanner_proposals_$_iter__13265(cljs.core.rest(s__13266__$2)));
}
} else {
return null;
}
break;
}
});})(selves,others,vents,zappers,g,temp__5733__auto__))
,null,null));
});})(selves,others,vents,zappers,g,temp__5733__auto__))
;
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__13261_SHARP_){
return pucks.agents.spanner.self(p,p1__13261_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$eye_DASH_color);
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spanner,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p))));
})(),(function (){var iter__4523__auto__ = ((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function pucks$agents$spanner$spanner_proposals_$_iter__13269(s__13270){
return (new cljs.core.LazySeq(null,((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function (){
var s__13270__$1 = s__13270;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13270__$1);
if(temp__5735__auto__){
var s__13270__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13270__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13270__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13272 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13271 = (0);
while(true){
if((i__13271 < size__4522__auto__)){
var weaker = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13271);
cljs.core.chunk_append(b__13272,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(weaker),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null));

var G__13274 = (i__13271 + (1));
i__13271 = G__13274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13272),pucks$agents$spanner$spanner_proposals_$_iter__13269(cljs.core.chunk_rest(s__13270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13272),null);
}
} else {
var weaker = cljs.core.first(s__13270__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(weaker),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$spanner$spanner_proposals_$_iter__13269(cljs.core.rest(s__13270__$2)));
}
} else {
return null;
}
break;
}
});})(selves,others,vents,zappers,g,temp__5733__auto__))
,null,null));
});})(selves,others,vents,zappers,g,temp__5733__auto__))
;
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__13262_SHARP_){
return (cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p1__13262_SHARP_) < cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p));
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__13263_SHARP_){
return pucks.agents.spanner.self(p,p1__13263_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$core_DASH_color);
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spanner,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)))));
})())], null)], 0));
} else {
return null;
}
});
/**
 * Returns a mutated version of color vector c.
 */
pucks.agents.spanner.mutate_color = (function pucks$agents$spanner$mutate_color(c){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13275_SHARP_){
return cljs.core.mod((p1__13275_SHARP_ + (cljs.core.rand_int((33)) - (16))),(256));
}),c);
});
/**
 * Returns a mutated version of urge value u.
 */
pucks.agents.spanner.mutate_urge = (function pucks$agents$spanner$mutate_urge(u){
var x__4219__auto__ = -1.0;
var y__4220__auto__ = (function (){var x__4222__auto__ = 1.0;
var y__4223__auto__ = (u + (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.1) - 0.05));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Returns a mutated version of probability value p.
 */
pucks.agents.spanner.mutate_probability = (function pucks$agents$spanner$mutate_probability(p){
var x__4219__auto__ = 0.0;
var y__4220__auto__ = (function (){var x__4222__auto__ = 1.0;
var y__4223__auto__ = (p + (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.05) - 0.025));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Returns a mutated version of color-difference value d.
 */
pucks.agents.spanner.mutate_color_difference = (function pucks$agents$spanner$mutate_color_difference(d){
var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = (255);
var y__4223__auto__ = (d + (cljs.core.rand_int((17)) - (8)));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Returns a mutated version of the provided genome.
 */
pucks.agents.spanner.mutate = (function pucks$agents$spanner$mutate(genome){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(genome,cljs.core.cst$kw$color,pucks.agents.spanner.mutate_color(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$eye_DASH_color,pucks.agents.spanner.mutate_color(cljs.core.cst$kw$eye_DASH_color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$core_DASH_color,pucks.agents.spanner.mutate_color(cljs.core.cst$kw$core_DASH_color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$self_DASH_flock_DASH_urge,pucks.agents.spanner.mutate_urge(cljs.core.cst$kw$self_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$other_DASH_flock_DASH_urge,pucks.agents.spanner.mutate_urge(cljs.core.cst$kw$other_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$self_DASH_cluster_DASH_urge,pucks.agents.spanner.mutate_urge(cljs.core.cst$kw$self_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$other_DASH_cluster_DASH_urge,pucks.agents.spanner.mutate_urge(cljs.core.cst$kw$other_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$color_DASH_difference,pucks.agents.spanner.mutate_color_difference(cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$random_DASH_urge,pucks.agents.spanner.mutate_urge(cljs.core.cst$kw$random_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$vent_DASH_urge,pucks.agents.spanner.mutate_urge(cljs.core.cst$kw$vent_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$zapper_DASH_urge,pucks.agents.spanner.mutate_urge(cljs.core.cst$kw$zapper_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$spawn_DASH_probability,pucks.agents.spanner.mutate_probability(cljs.core.cst$kw$spawn_DASH_probability.cljs$core$IFn$_invoke$arity$1(genome)));
});
/**
 * Returns a random spanner puck.
 */
pucks.agents.spanner.spanner = (function pucks$agents$spanner$spanner(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$spanner,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.spanner.spanner_proposals,cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genome,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$other_DASH_flock_DASH_urge,cljs.core.cst$kw$self_DASH_cluster_DASH_urge,cljs.core.cst$kw$color,cljs.core.cst$kw$spawn_DASH_probability,cljs.core.cst$kw$random_DASH_urge,cljs.core.cst$kw$self_DASH_flock_DASH_urge,cljs.core.cst$kw$vent_DASH_urge,cljs.core.cst$kw$zapper_DASH_urge,cljs.core.cst$kw$core_DASH_color,cljs.core.cst$kw$color_DASH_difference,cljs.core.cst$kw$other_DASH_cluster_DASH_urge,cljs.core.cst$kw$eye_DASH_color],[pucks.agents.spanner.rand_urge(),pucks.agents.spanner.rand_urge(),pucks.agents.spanner.rand_color(),pucks.agents.spanner.rand_probability(),pucks.agents.spanner.rand_urge(),pucks.agents.spanner.rand_urge(),pucks.agents.spanner.rand_urge(),pucks.agents.spanner.rand_urge(),pucks.agents.spanner.rand_color(),pucks.agents.spanner.rand_color_difference(),pucks.agents.spanner.rand_urge(),pucks.agents.spanner.rand_color()])], null),cljs.core.cst$kw$spawn_DASH_function,(function (p1__13276_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__13276_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5)),((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5))], null),cljs.core.cst$kw$rotation,(pucks.globals.two_pi * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int((3)) - (1)),(cljs.core.rand_int((3)) - (1))], null),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genome,pucks.agents.spanner.mutate(cljs.core.cst$kw$genome.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p1__13276_SHARP_)))], null)], null)], 0));
})], null)], 0));
});
