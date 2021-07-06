// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.opener');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.agents.active');
pucks.agents.opener.opener_proposals = (function pucks$agents$opener$opener_proposals(p){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$transfer,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4523__auto__ = (function pucks$agents$opener$opener_proposals_$_iter__11588(s__11589){
return (new cljs.core.LazySeq(null,(function (){
var s__11589__$1 = s__11589;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11589__$1);
if(temp__5735__auto__){
var s__11589__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11589__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11589__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11591 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11590 = (0);
while(true){
if((i__11590 < size__4522__auto__)){
var anyone = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11590);
cljs.core.chunk_append(b__11591,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$key], null)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$key], null)], null));

var G__11596 = (i__11590 + (1));
i__11590 = G__11596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11591),pucks$agents$opener$opener_proposals_$_iter__11588(cljs.core.chunk_rest(s__11589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11591),null);
}
} else {
var anyone = cljs.core.first(s__11589__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$key], null)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$key], null)], null),pucks$agents$opener$opener_proposals_$_iter__11588(cljs.core.rest(s__11589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p));
})(),(function (){var iter__4523__auto__ = (function pucks$agents$opener$opener_proposals_$_iter__11592(s__11593){
return (new cljs.core.LazySeq(null,(function (){
var s__11593__$1 = s__11593;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__11593__$1);
if(temp__5735__auto__){
var s__11593__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11593__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11593__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11595 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11594 = (0);
while(true){
if((i__11594 < size__4522__auto__)){
var gate = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11594);
cljs.core.chunk_append(b__11595,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(gate),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$key], null),cljs.core.cst$kw$ask,((function (i__11594,gate,c__4521__auto__,size__4522__auto__,b__11595,s__11593__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
var temp__5735__auto____$1 = cljs.core.cst$kw$open.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$promise.cljs$core$IFn$_invoke$arity$1(your_bid));
if(cljs.core.truth_(temp__5735__auto____$1)){
var open_promise = temp__5735__auto____$1;
return (open_promise > (0));
} else {
return null;
}
});})(i__11594,gate,c__4521__auto__,size__4522__auto__,b__11595,s__11593__$2,temp__5735__auto__))
], null));

var G__11597 = (i__11594 + (1));
i__11594 = G__11597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11595),pucks$agents$opener$opener_proposals_$_iter__11592(cljs.core.chunk_rest(s__11593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11595),null);
}
} else {
var gate = cljs.core.first(s__11593__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(gate),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$key], null),cljs.core.cst$kw$ask,((function (gate,s__11593__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
var temp__5735__auto____$1 = cljs.core.cst$kw$open.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$promise.cljs$core$IFn$_invoke$arity$1(your_bid));
if(cljs.core.truth_(temp__5735__auto____$1)){
var open_promise = temp__5735__auto____$1;
return (open_promise > (0));
} else {
return null;
}
});})(gate,s__11593__$2,temp__5735__auto__))
], null),pucks$agents$opener$opener_proposals_$_iter__11592(cljs.core.rest(s__11593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gate,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})()))], null);
});
pucks.agents.opener.opener = (function pucks$agents$opener$opener(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opener,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.opener.opener_proposals], null)], 0));
});
