// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.mapdonor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.agents.active');
pucks.agents.mapdonor.mapdonor_proposals = (function pucks$agents$mapdonor$mapdonor_proposals(p){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transfer,cljs.core.vec((function (){var iter__4523__auto__ = (function pucks$agents$mapdonor$mapdonor_proposals_$_iter__13630(s__13631){
return (new cljs.core.LazySeq(null,(function (){
var s__13631__$1 = s__13631;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13631__$1);
if(temp__5735__auto__){
var s__13631__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13631__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13631__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13633 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13632 = (0);
while(true){
if((i__13632 < size__4522__auto__)){
var recipient = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13632);
cljs.core.chunk_append(b__13633,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p))], null)], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null));

var G__13634 = (i__13632 + (1));
i__13632 = G__13634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13633),pucks$agents$mapdonor$mapdonor_proposals_$_iter__13630(cljs.core.chunk_rest(s__13631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13633),null);
}
} else {
var recipient = cljs.core.first(s__13631__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p))], null)], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$mapdonor$mapdonor_proposals_$_iter__13630(cljs.core.rest(s__13631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,(function (){var unmapped = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neighbors,cljs.core.cst$kw$overlaps,cljs.core.cst$kw$sensed,cljs.core.cst$kw$inventory,cljs.core.cst$kw$memory,cljs.core.cst$kw$draw_DASH_function,cljs.core.cst$kw$proposals,cljs.core.cst$kw$proposal_DASH_function,cljs.core.cst$kw$spawn_DASH_function], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (unmapped){
return (function (p1__13629_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,cljs.core.cons(p1__13629_SHARP_,unmapped));
});})(unmapped))
,cljs.core.deref(pucks.globals.all_agents));
})()], null)], null)], 0));
});
pucks.agents.mapdonor.mapdonor = (function pucks$agents$mapdonor$mapdonor(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mapdonor,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.mapdonor.mapdonor_proposals,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(96),(255)], null),cljs.core.cst$kw$core_DASH_color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(96),(255)], null)], null)], 0));
});
