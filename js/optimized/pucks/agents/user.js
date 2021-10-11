// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.user');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.agents.active');
pucks.agents.user.user_proposals = (function pucks$agents$user$user_proposals(p){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p))], null);
});
pucks.agents.user.user = (function pucks$agents$user$user(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$user,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.user.user_proposals], null)], 0));
});
