// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.swarmevolver');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
/**
 * Returns a random relative-position vector.
 */
pucks.agents.swarmevolver.rand_relative_position = (function pucks$agents$swarmevolver$rand_relative_position(){
return pucks.util.rotation__GT_relative_position((cljs.core.rand.cljs$core$IFn$_invoke$arity$1(pucks.globals.two_pi) - pucks.globals.pi));
});
/**
 * Returns a random urge level, which will be between -1.0 and 1.0.
 */
pucks.agents.swarmevolver.rand_urge = (function pucks$agents$swarmevolver$rand_urge(){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(2.0) - 1.0);
});
/**
 * Returns a random probability between 0 and 1.0.
 */
pucks.agents.swarmevolver.rand_probability = (function pucks$agents$swarmevolver$rand_probability(){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1(1.0);
});
/**
 * Returns a random color.
 */
pucks.agents.swarmevolver.rand_color = (function pucks$agents$swarmevolver$rand_color(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((256)),cljs.core.rand_int((256)),cljs.core.rand_int((256))], null);
});
/**
 * Returns a random color difference (an integer between 0 and 255).
 */
pucks.agents.swarmevolver.rand_color_difference = (function pucks$agents$swarmevolver$rand_color_difference(){
return cljs.core.rand_int((256));
});
pucks.agents.swarmevolver.self = (function pucks$agents$swarmevolver$self(p1,p2,tolerance){

var vec__13503 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p1);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503,(2),null);
var vec__13506 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p2);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13506,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13506,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13506,(2),null);
return ((((function (){var G__13512 = (r1 - r2);
return Math.abs(G__13512);
})() < tolerance)) && (((function (){var G__13513 = (g1 - g2);
return Math.abs(G__13513);
})() < tolerance)) && (((function (){var G__13514 = (b1 - b2);
return Math.abs(G__13514);
})() < tolerance)));
});
pucks.agents.swarmevolver.facing = (function pucks$agents$swarmevolver$facing(p1,p2){

return (pucks.util.rotational_difference(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p1),pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p2))) < pucks.globals.quarter_pi);
});
pucks.agents.swarmevolver.swarmevolver_proposals = (function pucks$agents$swarmevolver$swarmevolver_proposals(p){
var temp__5733__auto__ = cljs.core.cst$kw$genome.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p));
if(cljs.core.truth_(temp__5733__auto__)){
var g = temp__5733__auto__;
var selves = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (g,temp__5733__auto__){
return (function (p1__13515_SHARP_){
return pucks.agents.swarmevolver.self(p,p1__13515_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g));
});})(g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
var others = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selves,g,temp__5733__auto__){
return (function (p1__13516_SHARP_){
return (!(pucks.agents.swarmevolver.self(p,p1__13516_SHARP_,cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(g))));
});})(selves,g,temp__5733__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
var vents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vent,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
var zappers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zapper,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(1),cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$eye_DASH_color,cljs.core.cst$kw$eye_DASH_color.cljs$core$IFn$_invoke$arity$1(g),cljs.core.cst$kw$core_DASH_color,cljs.core.cst$kw$core_DASH_color.cljs$core$IFn$_invoke$arity$1(g)], null),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.util.rotation__GT_relative_position(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p)),((cljs.core.empty_QMARK_(selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$self_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,selves)))], 0))),((cljs.core.empty_QMARK_(others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$other_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,others)))], 0))),((cljs.core.empty_QMARK_(selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$self_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,selves)))], 0))),((cljs.core.empty_QMARK_(others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$other_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,others)))], 0))),((cljs.core.empty_QMARK_(vents))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vent_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,vents)))], 0))),((cljs.core.empty_QMARK_(zappers))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$zapper_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,zappers)))], 0))),pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$random_DASH_urge.cljs$core$IFn$_invoke$arity$1(g),pucks.agents.swarmevolver.rand_relative_position()], 0))], 0)))], null),(((((function (){var x__4219__auto__ = cljs.core.cst$kw$spawn_DASH_probability.cljs$core$IFn$_invoke$arity$1(g);
var y__4220__auto__ = 0.01;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})() * (cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p) / (100))) > cljs.core.rand.cljs$core$IFn$_invoke$arity$0()))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spawn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__13519 = cljs.core.cst$kw$spawn_DASH_function.cljs$core$IFn$_invoke$arity$1(p);
return (fexpr__13519.cljs$core$IFn$_invoke$arity$1 ? fexpr__13519.cljs$core$IFn$_invoke$arity$1(p) : fexpr__13519.call(null,p));
})()], null)], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fire_DASH_torpedo,(function (){var or__4131__auto__ = (function (){var and__4120__auto__ = ((cljs.core.cst$kw$shoot_DASH_self_DASH_probability.cljs$core$IFn$_invoke$arity$1(g) / (10)) > cljs.core.rand.cljs$core$IFn$_invoke$arity$0());
if(and__4120__auto__){
return cljs.core.some(((function (and__4120__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__13517_SHARP_){
return pucks.agents.swarmevolver.facing(p,p1__13517_SHARP_);
});})(and__4120__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,selves);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = ((cljs.core.cst$kw$shoot_DASH_other_DASH_probability.cljs$core$IFn$_invoke$arity$1(g) / (10)) > cljs.core.rand.cljs$core$IFn$_invoke$arity$0());
if(and__4120__auto__){
return cljs.core.some(((function (and__4120__auto__,or__4131__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__13518_SHARP_){
return pucks.agents.swarmevolver.facing(p,p1__13518_SHARP_);
});})(and__4120__auto__,or__4131__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,others);
} else {
return and__4120__auto__;
}
}
})()], null)], 0));
} else {
return null;
}
});
/**
 * Returns a mutated version of color vector c.
 */
pucks.agents.swarmevolver.mutate_color = (function pucks$agents$swarmevolver$mutate_color(c){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13520_SHARP_){
return cljs.core.mod((p1__13520_SHARP_ + (cljs.core.rand_int((33)) - (16))),(256));
}),c);
});
/**
 * Returns a mutated version of urge value u.
 */
pucks.agents.swarmevolver.mutate_urge = (function pucks$agents$swarmevolver$mutate_urge(u){
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
pucks.agents.swarmevolver.mutate_probability = (function pucks$agents$swarmevolver$mutate_probability(p){
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
pucks.agents.swarmevolver.mutate_color_difference = (function pucks$agents$swarmevolver$mutate_color_difference(d){
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
pucks.agents.swarmevolver.mutate = (function pucks$agents$swarmevolver$mutate(genome){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(genome,cljs.core.cst$kw$color,pucks.agents.swarmevolver.mutate_color(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$eye_DASH_color,pucks.agents.swarmevolver.mutate_color(cljs.core.cst$kw$eye_DASH_color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$core_DASH_color,pucks.agents.swarmevolver.mutate_color(cljs.core.cst$kw$core_DASH_color.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$self_DASH_flock_DASH_urge,pucks.agents.swarmevolver.mutate_urge(cljs.core.cst$kw$self_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$other_DASH_flock_DASH_urge,pucks.agents.swarmevolver.mutate_urge(cljs.core.cst$kw$other_DASH_flock_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$self_DASH_cluster_DASH_urge,pucks.agents.swarmevolver.mutate_urge(cljs.core.cst$kw$self_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$other_DASH_cluster_DASH_urge,pucks.agents.swarmevolver.mutate_urge(cljs.core.cst$kw$other_DASH_cluster_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$color_DASH_difference,pucks.agents.swarmevolver.mutate_color_difference(cljs.core.cst$kw$color_DASH_difference.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$random_DASH_urge,pucks.agents.swarmevolver.mutate_urge(cljs.core.cst$kw$random_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$vent_DASH_urge,pucks.agents.swarmevolver.mutate_urge(cljs.core.cst$kw$vent_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$zapper_DASH_urge,pucks.agents.swarmevolver.mutate_urge(cljs.core.cst$kw$zapper_DASH_urge.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$shoot_DASH_self_DASH_probability,pucks.agents.swarmevolver.mutate_probability(cljs.core.cst$kw$shoot_DASH_self_DASH_probability.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$shoot_DASH_other_DASH_probability,pucks.agents.swarmevolver.mutate_probability(cljs.core.cst$kw$shoot_DASH_other_DASH_probability.cljs$core$IFn$_invoke$arity$1(genome))),cljs.core.cst$kw$spawn_DASH_probability,pucks.agents.swarmevolver.mutate_probability(cljs.core.cst$kw$spawn_DASH_probability.cljs$core$IFn$_invoke$arity$1(genome)));
});
/**
 * Returns a random swarmevolver puck.
 */
pucks.agents.swarmevolver.swarmevolver = (function pucks$agents$swarmevolver$swarmevolver(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$swarmevolver,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.swarmevolver.swarmevolver_proposals,cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genome,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$other_DASH_flock_DASH_urge,cljs.core.cst$kw$self_DASH_cluster_DASH_urge,cljs.core.cst$kw$color,cljs.core.cst$kw$spawn_DASH_probability,cljs.core.cst$kw$random_DASH_urge,cljs.core.cst$kw$self_DASH_flock_DASH_urge,cljs.core.cst$kw$vent_DASH_urge,cljs.core.cst$kw$zapper_DASH_urge,cljs.core.cst$kw$shoot_DASH_other_DASH_probability,cljs.core.cst$kw$core_DASH_color,cljs.core.cst$kw$color_DASH_difference,cljs.core.cst$kw$other_DASH_cluster_DASH_urge,cljs.core.cst$kw$eye_DASH_color,cljs.core.cst$kw$shoot_DASH_self_DASH_probability],[pucks.agents.swarmevolver.rand_urge(),pucks.agents.swarmevolver.rand_urge(),pucks.agents.swarmevolver.rand_color(),pucks.agents.swarmevolver.rand_probability(),pucks.agents.swarmevolver.rand_urge(),pucks.agents.swarmevolver.rand_urge(),pucks.agents.swarmevolver.rand_urge(),pucks.agents.swarmevolver.rand_urge(),pucks.agents.swarmevolver.rand_probability(),pucks.agents.swarmevolver.rand_color(),pucks.agents.swarmevolver.rand_color_difference(),pucks.agents.swarmevolver.rand_urge(),pucks.agents.swarmevolver.rand_color(),pucks.agents.swarmevolver.rand_probability()])], null),cljs.core.cst$kw$spawn_DASH_function,(function (p1__13521_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__13521_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5)),((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5))], null),cljs.core.cst$kw$rotation,(pucks.globals.two_pi * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int((3)) - (1)),(cljs.core.rand_int((3)) - (1))], null),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genome,pucks.agents.swarmevolver.mutate(cljs.core.cst$kw$genome.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p1__13521_SHARP_)))], null)], null)], 0));
})], null)], 0));
});
