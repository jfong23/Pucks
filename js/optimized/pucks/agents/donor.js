// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.donor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.agents.active');
pucks.agents.donor.donor_proposals = (function pucks$agents$donor$donor_proposals(p,item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$transfer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$donor$donor_proposals_$_iter__13827(s__13828){
return (new cljs.core.LazySeq(null,(function (){
var s__13828__$1 = s__13828;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13828__$1);
if(temp__5735__auto__){
var s__13828__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13828__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13828__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13830 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13829 = (0);
while(true){
if((i__13829 < size__4522__auto__)){
var recipient = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13829);
cljs.core.chunk_append(b__13830,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,item], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null));

var G__13831 = (i__13829 + (1));
i__13829 = G__13831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13830),pucks$agents$donor$donor_proposals_$_iter__13827(cljs.core.chunk_rest(s__13828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13830),null);
}
} else {
var recipient = cljs.core.first(s__13828__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,item], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$donor$donor_proposals_$_iter__13827(cljs.core.rest(s__13828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})())], null);
});
pucks.agents.donor.donor = (function pucks$agents$donor$donor(item){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$donor,true,cljs.core.cst$kw$inventory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null),cljs.core.cst$kw$proposal_DASH_function,(function (p1__13832_SHARP_){
return pucks.agents.donor.donor_proposals(p1__13832_SHARP_,item);
}),cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null)], null)], 0));
});
