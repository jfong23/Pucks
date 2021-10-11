// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world17');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.active');
pucks.worlds.dev.world17.agents = (function pucks$worlds$dev$world17$agents(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$proposal_DASH_function,(function (p){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acceleration,(1),cljs.core.cst$kw$thrust_DASH_angle,(cljs.core.cst$kw$thrust_DASH_angle.cljs$core$IFn$_invoke$arity$1(p) + 0.1)], null);
}),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),cljs.core.cst$kw$rotation,(0),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$proposal_DASH_function,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(1),cljs.core.cst$kw$thrust_DASH_angle,(cljs.core.cst$kw$thrust_DASH_angle.cljs$core$IFn$_invoke$arity$1(p) + 0.1),cljs.core.cst$kw$rotation,(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p) - 0.03)], null);
}),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),cljs.core.cst$kw$rotation,(0),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], 0))], null);
});
pucks.worlds.dev.world17.settings = (function pucks$worlds$dev$world17$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
