// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.spawner');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.agents.active');
pucks.agents.spawner.spawner_proposals = (function pucks$agents$spawner$spawner_proposals(p){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p))], null),(((cljs.core.rand_int((250)) === (0)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spawn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__16802 = cljs.core.cst$kw$spawn_DASH_function.cljs$core$IFn$_invoke$arity$1(p);
return (fexpr__16802.cljs$core$IFn$_invoke$arity$1 ? fexpr__16802.cljs$core$IFn$_invoke$arity$1(p) : fexpr__16802.call(null,p));
})()], null)], null):cljs.core.PersistentArrayMap.EMPTY)], 0));
});
pucks.agents.spawner.spawner = (function pucks$agents$spawner$spawner(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$spawner,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.spawner.spawner_proposals,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(128),(255)], null),cljs.core.cst$kw$spawn_DASH_function,(function (p1__16803_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16803_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5)),((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5))], null),cljs.core.cst$kw$rotation,(pucks.globals.two_pi * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int((3)) - (1)),(cljs.core.rand_int((3)) - (1))], null)], null)], 0));
})], null)], 0));
});
