// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.startstop');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
pucks.agents.startstop.startstop_proposals = (function pucks$agents$startstop$startstop_proposals(p){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$acceleration,(((cljs.core.mod(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(p),(50)) < (25)))?(1):(0.25 * (- pucks.vec2D.length(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)))))], null);
});
pucks.agents.startstop.startstop = (function pucks$agents$startstop$startstop(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$startstop,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.startstop.startstop_proposals,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(96),(255),(96)], null)], null)], 0));
});
