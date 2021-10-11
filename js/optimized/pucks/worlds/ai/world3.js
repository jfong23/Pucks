// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.ai.world3');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
pucks.worlds.ai.world3.agents = (function pucks$worlds$ai$world3$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__16757(s__16758){
return (new cljs.core.LazySeq(null,(function (){
var s__16758__$1 = s__16758;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16758__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__16758__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world3$agents_$_iter__16757_$_iter__16759(s__16760){
return (new cljs.core.LazySeq(null,((function (s__16758__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__16760__$1 = s__16760;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__16760__$1);
if(temp__5735__auto____$1){
var s__16760__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16760__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16760__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16762 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16761 = (0);
while(true){
if((i__16761 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16761);
cljs.core.chunk_append(b__16762,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__16791 = (i__16761 + (1));
i__16761 = G__16791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16762),pucks$worlds$ai$world3$agents_$_iter__16757_$_iter__16759(cljs.core.chunk_rest(s__16760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16762),null);
}
} else {
var y = cljs.core.first(s__16760__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world3$agents_$_iter__16757_$_iter__16759(cljs.core.rest(s__16760__$2)));
}
} else {
return null;
}
break;
}
});})(s__16758__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__16758__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world3$agents_$_iter__16757(cljs.core.rest(s__16758__$1)));
} else {
var G__16792 = cljs.core.rest(s__16758__$1);
s__16758__$1 = G__16792;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__16763(s__16764){
return (new cljs.core.LazySeq(null,(function (){
var s__16764__$1 = s__16764;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16764__$1);
if(temp__5735__auto__){
var s__16764__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16764__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16764__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16766 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16765 = (0);
while(true){
if((i__16765 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16765);
cljs.core.chunk_append(b__16766,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__16793 = (i__16765 + (1));
i__16765 = G__16793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16766),pucks$worlds$ai$world3$agents_$_iter__16763(cljs.core.chunk_rest(s__16764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16766),null);
}
} else {
var y = cljs.core.first(s__16764__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$ai$world3$agents_$_iter__16763(cljs.core.rest(s__16764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(201),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__16767(s__16768){
return (new cljs.core.LazySeq(null,(function (){
var s__16768__$1 = s__16768;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16768__$1);
if(temp__5735__auto__){
var s__16768__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16768__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16768__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16770 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16769 = (0);
while(true){
if((i__16769 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16769);
cljs.core.chunk_append(b__16770,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__16794 = (i__16769 + (1));
i__16769 = G__16794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16770),pucks$worlds$ai$world3$agents_$_iter__16767(cljs.core.chunk_rest(s__16768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16770),null);
}
} else {
var y = cljs.core.first(s__16768__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$ai$world3$agents_$_iter__16767(cljs.core.rest(s__16768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__16771(s__16772){
return (new cljs.core.LazySeq(null,(function (){
var s__16772__$1 = s__16772;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16772__$1);
if(temp__5735__auto__){
var s__16772__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16772__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16772__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16774 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16773 = (0);
while(true){
if((i__16773 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16773);
cljs.core.chunk_append(b__16774,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)));

var G__16795 = (i__16773 + (1));
i__16773 = G__16795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16774),pucks$worlds$ai$world3$agents_$_iter__16771(cljs.core.chunk_rest(s__16772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16774),null);
}
} else {
var x = cljs.core.first(s__16772__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)),pucks$worlds$ai$world3$agents_$_iter__16771(cljs.core.rest(s__16772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__16775(s__16776){
return (new cljs.core.LazySeq(null,(function (){
var s__16776__$1 = s__16776;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16776__$1);
if(temp__5735__auto__){
var s__16776__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16776__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16776__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16778 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16777 = (0);
while(true){
if((i__16777 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16777);
cljs.core.chunk_append(b__16778,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)));

var G__16796 = (i__16777 + (1));
i__16777 = G__16796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16778),pucks$worlds$ai$world3$agents_$_iter__16775(cljs.core.chunk_rest(s__16776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16778),null);
}
} else {
var x = cljs.core.first(s__16776__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)),pucks$worlds$ai$world3$agents_$_iter__16775(cljs.core.rest(s__16776__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__16779(s__16780){
return (new cljs.core.LazySeq(null,(function (){
var s__16780__$1 = s__16780;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16780__$1);
if(temp__5735__auto__){
var s__16780__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16780__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16780__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16782 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16781 = (0);
while(true){
if((i__16781 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16781);
cljs.core.chunk_append(b__16782,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)));

var G__16797 = (i__16781 + (1));
i__16781 = G__16797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16782),pucks$worlds$ai$world3$agents_$_iter__16779(cljs.core.chunk_rest(s__16780__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16782),null);
}
} else {
var x = cljs.core.first(s__16780__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)),pucks$worlds$ai$world3$agents_$_iter__16779(cljs.core.rest(s__16780__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__16783(s__16784){
return (new cljs.core.LazySeq(null,(function (){
var s__16784__$1 = s__16784;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16784__$1);
if(temp__5735__auto__){
var s__16784__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16784__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16784__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16786 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16785 = (0);
while(true){
if((i__16785 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16785);
cljs.core.chunk_append(b__16786,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)));

var G__16798 = (i__16785 + (1));
i__16785 = G__16798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16786),pucks$worlds$ai$world3$agents_$_iter__16783(cljs.core.chunk_rest(s__16784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16786),null);
}
} else {
var y = cljs.core.first(s__16784__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)),pucks$worlds$ai$world3$agents_$_iter__16783(cljs.core.rest(s__16784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__16787(s__16788){
return (new cljs.core.LazySeq(null,(function (){
var s__16788__$1 = s__16788;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16788__$1);
if(temp__5735__auto__){
var s__16788__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16788__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16788__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16790 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16789 = (0);
while(true){
if((i__16789 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16789);
cljs.core.chunk_append(b__16790,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)));

var G__16799 = (i__16789 + (1));
i__16789 = G__16799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16790),pucks$worlds$ai$world3$agents_$_iter__16787(cljs.core.chunk_rest(s__16788__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16790),null);
}
} else {
var y = cljs.core.first(s__16788__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)),pucks$worlds$ai$world3$agents_$_iter__16787(cljs.core.rest(s__16788__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.user.user),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0))], null)], 0));
});
pucks.worlds.ai.world3.settings = (function pucks$worlds$ai$world3$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
