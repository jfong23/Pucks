// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world9');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.shooter');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world9.agents = (function pucks$worlds$dev$world9$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13711(s__13712){
return (new cljs.core.LazySeq(null,(function (){
var s__13712__$1 = s__13712;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13712__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13712__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world9$agents_$_iter__13711_$_iter__13713(s__13714){
return (new cljs.core.LazySeq(null,((function (s__13712__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13714__$1 = s__13714;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13714__$1);
if(temp__5735__auto____$1){
var s__13714__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13714__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13714__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13716 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13715 = (0);
while(true){
if((i__13715 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13715);
cljs.core.chunk_append(b__13716,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13745 = (i__13715 + (1));
i__13715 = G__13745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13716),pucks$worlds$dev$world9$agents_$_iter__13711_$_iter__13713(cljs.core.chunk_rest(s__13714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13716),null);
}
} else {
var y = cljs.core.first(s__13714__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13711_$_iter__13713(cljs.core.rest(s__13714__$2)));
}
} else {
return null;
}
break;
}
});})(s__13712__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13712__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world9$agents_$_iter__13711(cljs.core.rest(s__13712__$1)));
} else {
var G__13746 = cljs.core.rest(s__13712__$1);
s__13712__$1 = G__13746;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13717(s__13718){
return (new cljs.core.LazySeq(null,(function (){
var s__13718__$1 = s__13718;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13718__$1);
if(temp__5735__auto__){
var s__13718__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13718__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13718__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13720 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13719 = (0);
while(true){
if((i__13719 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13719);
cljs.core.chunk_append(b__13720,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__13747 = (i__13719 + (1));
i__13719 = G__13747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13720),pucks$worlds$dev$world9$agents_$_iter__13717(cljs.core.chunk_rest(s__13718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13720),null);
}
} else {
var y = cljs.core.first(s__13718__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13717(cljs.core.rest(s__13718__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(201),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13721(s__13722){
return (new cljs.core.LazySeq(null,(function (){
var s__13722__$1 = s__13722;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13722__$1);
if(temp__5735__auto__){
var s__13722__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13722__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13722__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13724 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13723 = (0);
while(true){
if((i__13723 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13723);
cljs.core.chunk_append(b__13724,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__13748 = (i__13723 + (1));
i__13723 = G__13748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13724),pucks$worlds$dev$world9$agents_$_iter__13721(cljs.core.chunk_rest(s__13722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13724),null);
}
} else {
var y = cljs.core.first(s__13722__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13721(cljs.core.rest(s__13722__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13725(s__13726){
return (new cljs.core.LazySeq(null,(function (){
var s__13726__$1 = s__13726;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13726__$1);
if(temp__5735__auto__){
var s__13726__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13726__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13726__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13728 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13727 = (0);
while(true){
if((i__13727 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13727);
cljs.core.chunk_append(b__13728,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)));

var G__13749 = (i__13727 + (1));
i__13727 = G__13749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13728),pucks$worlds$dev$world9$agents_$_iter__13725(cljs.core.chunk_rest(s__13726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13728),null);
}
} else {
var x = cljs.core.first(s__13726__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13725(cljs.core.rest(s__13726__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13729(s__13730){
return (new cljs.core.LazySeq(null,(function (){
var s__13730__$1 = s__13730;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13730__$1);
if(temp__5735__auto__){
var s__13730__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13730__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13730__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13732 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13731 = (0);
while(true){
if((i__13731 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13731);
cljs.core.chunk_append(b__13732,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)));

var G__13750 = (i__13731 + (1));
i__13731 = G__13750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13732),pucks$worlds$dev$world9$agents_$_iter__13729(cljs.core.chunk_rest(s__13730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13732),null);
}
} else {
var x = cljs.core.first(s__13730__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13729(cljs.core.rest(s__13730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13733(s__13734){
return (new cljs.core.LazySeq(null,(function (){
var s__13734__$1 = s__13734;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13734__$1);
if(temp__5735__auto__){
var s__13734__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13734__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13734__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13736 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13735 = (0);
while(true){
if((i__13735 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13735);
cljs.core.chunk_append(b__13736,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)));

var G__13751 = (i__13735 + (1));
i__13735 = G__13751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13736),pucks$worlds$dev$world9$agents_$_iter__13733(cljs.core.chunk_rest(s__13734__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13736),null);
}
} else {
var x = cljs.core.first(s__13734__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13733(cljs.core.rest(s__13734__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13737(s__13738){
return (new cljs.core.LazySeq(null,(function (){
var s__13738__$1 = s__13738;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13738__$1);
if(temp__5735__auto__){
var s__13738__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13738__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13738__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13740 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13739 = (0);
while(true){
if((i__13739 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13739);
cljs.core.chunk_append(b__13740,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)));

var G__13752 = (i__13739 + (1));
i__13739 = G__13752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13740),pucks$worlds$dev$world9$agents_$_iter__13737(cljs.core.chunk_rest(s__13738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13740),null);
}
} else {
var y = cljs.core.first(s__13738__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13737(cljs.core.rest(s__13738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13741(s__13742){
return (new cljs.core.LazySeq(null,(function (){
var s__13742__$1 = s__13742;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13742__$1);
if(temp__5735__auto__){
var s__13742__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13742__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13742__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13744 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13743 = (0);
while(true){
if((i__13743 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13743);
cljs.core.chunk_append(b__13744,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)));

var G__13753 = (i__13743 + (1));
i__13743 = G__13753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13744),pucks$worlds$dev$world9$agents_$_iter__13741(cljs.core.chunk_rest(s__13742__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13744),null);
}
} else {
var y = cljs.core.first(s__13742__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13741(cljs.core.rest(s__13742__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.shooter.shooter),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world9.settings = (function pucks$worlds$dev$world9$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
