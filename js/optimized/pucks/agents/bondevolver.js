// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.bondevolver');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
/**
 * Returns a random relative-position vector.
 */
pucks.agents.bondevolver.rand_relative_position = (function pucks$agents$bondevolver$rand_relative_position(){
return pucks.util.rotation__GT_relative_position((cljs.core.rand.cljs$core$IFn$_invoke$arity$1(pucks.globals.two_pi) - pucks.globals.pi));
});
/**
 * Returns a random urge level, which will be between -1.0 and 1.0.
 */
pucks.agents.bondevolver.rand_urge = (function pucks$agents$bondevolver$rand_urge(){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(2.0) - 1.0);
});
/**
 * Returns a random probability between 0 and 1.0.
 */
pucks.agents.bondevolver.rand_probability = (function pucks$agents$bondevolver$rand_probability(){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1(1.0);
});
/**
 * Returns a random color.
 */
pucks.agents.bondevolver.rand_color = (function pucks$agents$bondevolver$rand_color(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((256)),cljs.core.rand_int((256)),cljs.core.rand_int((256))], null);
});
/**
 * Returns a random color difference (an integer between 0 and 255).
 */
pucks.agents.bondevolver.rand_color_difference = (function pucks$agents$bondevolver$rand_color_difference(){
return cljs.core.rand_int((256));
});
pucks.agents.bondevolver.self = (function pucks$agents$bondevolver$self(p1,p2,tolerance,color_key){

var vec__16816 = (color_key.cljs$core$IFn$_invoke$arity$1 ? color_key.cljs$core$IFn$_invoke$arity$1(p1) : color_key.call(null,p1));
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816,(2),null);
var vec__16819 = (color_key.cljs$core$IFn$_invoke$arity$1 ? color_key.cljs$core$IFn$_invoke$arity$1(p2) : color_key.call(null,p2));
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16819,(2),null);
return ((((function (){var G__16825 = (r1 - r2);
return Math.abs(G__16825);
})() < tolerance)) && (((function (){var G__16826 = (g1 - g2);
return Math.abs(G__16826);
})() < tolerance)) && (((function (){var G__16827 = (b1 - b2);
return Math.abs(G__16827);
})() < tolerance)));
});
pucks.agents.bondevolver.facing = (function pucks$agents$bondevolver$facing(p1,p2){

return (pucks.util.rotational_difference(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p1),pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p2))) < pucks.globals.quarter_pi);
});
pucks.agents.bondevolver.bondevolver_proposals = (function pucks$agents$bondevolver$bondevolver_proposals(p){
var temp__5733__auto__ = cljs.core.cst$kw$genome.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p));
if(cljs.core.truth_(temp__5733__auto__)){
var g = temp__5733__auto__;
var selves = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (g,temp__5733__auto__){
return (function (p1__16828_SHARP_){
return pucks.agents.bondevolver.self(p,p1__16828_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$color);
});})(g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
var others = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selves,g,temp__5733__auto__){
return (function (p1__16829_SHARP_){
return (!(pucks.agents.bondevolver.self(p,p1__16829_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$color)));
});})(selves,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
var vents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vent,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
var zappers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zapper,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(1),cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$eye_DASH_color,cljs.core.cst$kw$eye_DASH_color.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$core_DASH_color,cljs.core.cst$kw$core_DASH_color.cljs$core$IFn$_invoke$arity$1(g)], null),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.util.rotation__GT_relative_position(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p)),((cljs.core.empty_QMARK_(selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$self_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,selves)))], 0))),((cljs.core.empty_QMARK_(others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$other_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,others)))], 0))),((cljs.core.empty_QMARK_(selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$self_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,selves)))], 0))),((cljs.core.empty_QMARK_(others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$other_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,others)))], 0))),((cljs.core.empty_QMARK_(vents))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vent_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,vents)))], 0))),((cljs.core.empty_QMARK_(zappers))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$zapper_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,zappers)))], 0))),pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$random_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.agents.bondevolver.rand_relative_position()], 0))], 0)))], null),(((((function (){var x__4219__auto__ = cljs.core.cst$kw$spawn_DASH_probability.cljs$core$IFn$_invoke$arity$1(g);
var y__4220__auto__ = 0.01;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})() * (cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p) / (100))) > cljs.core.rand.cljs$core$IFn$_invoke$arity$0()))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spawn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__16833 = cljs.core.cst$kw$spawn_DASH_function.cljs$core$IFn$_invoke$arity$1(p);
return (fexpr__16833.cljs$core$IFn$_invoke$arity$1 ? fexpr__16833.cljs$core$IFn$_invoke$arity$1(p) : fexpr__16833.call(null,p));
})()], null)], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transfer,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4523__auto__ = ((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function pucks$agents$bondevolver$bondevolver_proposals_$_iter__16834(s__16835){
return (new cljs.core.LazySeq(null,((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function (){
var s__16835__$1 = s__16835;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16835__$1);
if(temp__5735__auto__){
var s__16835__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16835__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16835__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16837 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16836 = (0);
while(true){
if((i__16836 < size__4522__auto__)){
var binder = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16836);
cljs.core.chunk_append(b__16837,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder)], null)], null));

var G__16842 = (i__16836 + (1));
i__16836 = G__16842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16837),pucks$agents$bondevolver$bondevolver_proposals_$_iter__16834(cljs.core.chunk_rest(s__16835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16837),null);
}
} else {
var binder = cljs.core.first(s__16835__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder)], null)], null),pucks$agents$bondevolver$bondevolver_proposals_$_iter__16834(cljs.core.rest(s__16835__$2)));
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
return (function (p1__16830_SHARP_){
return pucks.agents.bondevolver.self(p,p1__16830_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$eye_DASH_color);
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bondevolver,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p))));
})(),(function (){var iter__4523__auto__ = ((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function pucks$agents$bondevolver$bondevolver_proposals_$_iter__16838(s__16839){
return (new cljs.core.LazySeq(null,((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function (){
var s__16839__$1 = s__16839;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16839__$1);
if(temp__5735__auto__){
var s__16839__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16839__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16839__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16841 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16840 = (0);
while(true){
if((i__16840 < size__4522__auto__)){
var weaker = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16840);
cljs.core.chunk_append(b__16841,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(weaker),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null));

var G__16843 = (i__16840 + (1));
i__16840 = G__16843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16841),pucks$agents$bondevolver$bondevolver_proposals_$_iter__16838(cljs.core.chunk_rest(s__16839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16841),null);
}
} else {
var weaker = cljs.core.first(s__16839__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(weaker),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$bondevolver$bondevolver_proposals_$_iter__16838(cljs.core.rest(s__16839__$2)));
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
return (function (p1__16831_SHARP_){
return (cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p1__16831_SHARP_) < cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p));
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__16832_SHARP_){
return pucks.agents.bondevolver.self(p,p1__16832_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$core_DASH_color);
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bondevolver,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)))));
})())], null)], 0));
} else {
return null;
}
});
/**
 * Returns a mutated version of color vector c.
 */
pucks.agents.bondevolver.mutate_color = (function pucks$agents$bondevolver$mutate_color(c){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16844_SHARP_){
return cljs.core.mod((p1__16844_SHARP_ + (cljs.core.rand_int((33)) - (16))),(256));
}),c);
});
/**
 * Returns a mutated version of urge value u.
 */
pucks.agents.bondevolver.mutate_urge = (function pucks$agents$bondevolver$mutate_urge(u){
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
pucks.agents.bondevolver.mutate_probability = (function pucks$agents$bondevolver$mutate_probability(p){
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
pucks.agents.bondevolver.mutate_color_difference = (function pucks$agents$bondevolver$mutate_color_difference(d){
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
pucks.agents.bondevolver.mutate = (function pucks$agents$bondevolver$mutate(genome){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(genome,cljs.core.cst$kw$color,pucks.agents.bondevolver.mutate_color(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$eye_DASH_color,pucks.agents.bondevolver.mutate_color(cljs.core.cst$kw$eye_DASH_color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$core_DASH_color,pucks.agents.bondevolver.mutate_color(cljs.core.cst$kw$core_DASH_color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$self_DASH_flock_DASH_urge,pucks.agents.bondevolver.mutate_urge(cljs.core.cst$kw$self_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$other_DASH_flock_DASH_urge,pucks.agents.bondevolver.mutate_urge(cljs.core.cst$kw$other_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$self_DASH_cluster_DASH_urge,pucks.agents.bondevolver.mutate_urge(cljs.core.cst$kw$self_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$other_DASH_cluster_DASH_urge,pucks.agents.bondevolver.mutate_urge(cljs.core.cst$kw$other_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$color_DASH_difference,pucks.agents.bondevolver.mutate_color_difference(cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$random_DASH_urge,pucks.agents.bondevolver.mutate_urge(cljs.core.cst$kw$random_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$vent_DASH_urge,pucks.agents.bondevolver.mutate_urge(cljs.core.cst$kw$vent_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$zapper_DASH_urge,pucks.agents.bondevolver.mutate_urge(cljs.core.cst$kw$zapper_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$spawn_DASH_probability,pucks.agents.bondevolver.mutate_probability(cljs.core.cst$kw$spawn_DASH_probability.cljs$core$IFn$_invoke$arity$1(genome)));
});
/**
 * Returns a random swarmevolver puck.
 */
pucks.agents.bondevolver.bondevolver = (function pucks$agents$bondevolver$bondevolver(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bondevolver,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.bondevolver.bondevolver_proposals,cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genome,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$other_DASH_flock_DASH_urge,cljs.core.cst$kw$self_DASH_cluster_DASH_urge,cljs.core.cst$kw$color,cljs.core.cst$kw$spawn_DASH_probability,cljs.core.cst$kw$random_DASH_urge,cljs.core.cst$kw$self_DASH_flock_DASH_urge,cljs.core.cst$kw$vent_DASH_urge,cljs.core.cst$kw$zapper_DASH_urge,cljs.core.cst$kw$core_DASH_color,cljs.core.cst$kw$color_DASH_difference,cljs.core.cst$kw$other_DASH_cluster_DASH_urge,cljs.core.cst$kw$eye_DASH_color],[pucks.agents.bondevolver.rand_urge(),pucks.agents.bondevolver.rand_urge(),pucks.agents.bondevolver.rand_color(),pucks.agents.bondevolver.rand_probability(),pucks.agents.bondevolver.rand_urge(),pucks.agents.bondevolver.rand_urge(),pucks.agents.bondevolver.rand_urge(),pucks.agents.bondevolver.rand_urge(),pucks.agents.bondevolver.rand_color(),pucks.agents.bondevolver.rand_color_difference(),pucks.agents.bondevolver.rand_urge(),pucks.agents.bondevolver.rand_color()])], null),cljs.core.cst$kw$spawn_DASH_function,(function (p1__16845_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16845_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5)),((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5))], null),cljs.core.cst$kw$rotation,(pucks.globals.two_pi * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int((3)) - (1)),(cljs.core.rand_int((3)) - (1))], null),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genome,pucks.agents.bondevolver.mutate(cljs.core.cst$kw$genome.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p1__16845_SHARP_)))], null)], null)], 0));
})], null)], 0));
});
