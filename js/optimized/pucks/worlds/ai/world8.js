// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.ai.world8');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.mapdonor');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.donor');
goog.require('pucks.agents.shooter');
/**
 * Returns a positive or negative random number with magnitude less than n.
 */
pucks.worlds.ai.world8.rand_PLUS__ = (function pucks$worlds$ai$world8$rand_PLUS__(n){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * n)) - n);
});
/**
 * Returns a sequence of pucks that form a box of stones with a vent in the
 * middle and a gate on each side.
 */
pucks.worlds.ai.world8.ventbox = (function pucks$worlds$ai$world8$ventbox(p__16704){
var vec__16705 = p__16704;
var center_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16705,(0),null);
var center_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16705,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null)], 0))], null)], 0));
});
pucks.worlds.ai.world8.agents = (function pucks$worlds$ai$world8$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__16709(s__16710){
return (new cljs.core.LazySeq(null,(function (){
var s__16710__$1 = s__16710;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16710__$1);
if(temp__5735__auto__){
var s__16710__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16710__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16710__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16712 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16711 = (0);
while(true){
if((i__16711 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16711);
cljs.core.chunk_append(b__16712,(function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((600)));
var iter__4523__auto__ = ((function (i__16711,start,stop,y,c__4521__auto__,size__4522__auto__,b__16712,s__16710__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__16709_$_iter__16713(s__16714){
return (new cljs.core.LazySeq(null,((function (i__16711,start,stop,y,c__4521__auto__,size__4522__auto__,b__16712,s__16710__$2,temp__5735__auto__){
return (function (){
var s__16714__$1 = s__16714;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__16714__$1);
if(temp__5735__auto____$1){
var s__16714__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16714__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__16714__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__16716 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__16715 = (0);
while(true){
if((i__16715 < size__4522__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__16715);
cljs.core.chunk_append(b__16716,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__16739 = (i__16715 + (1));
i__16715 = G__16739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16716),pucks$worlds$ai$world8$agents_$_iter__16709_$_iter__16713(cljs.core.chunk_rest(s__16714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16716),null);
}
} else {
var x = cljs.core.first(s__16714__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world8$agents_$_iter__16709_$_iter__16713(cljs.core.rest(s__16714__$2)));
}
} else {
return null;
}
break;
}
});})(i__16711,start,stop,y,c__4521__auto__,size__4522__auto__,b__16712,s__16710__$2,temp__5735__auto__))
,null,null));
});})(i__16711,start,stop,y,c__4521__auto__,size__4522__auto__,b__16712,s__16710__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__16740 = (i__16711 + (1));
i__16711 = G__16740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16712),pucks$worlds$ai$world8$agents_$_iter__16709(cljs.core.chunk_rest(s__16710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16712),null);
}
} else {
var y = cljs.core.first(s__16710__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((600)));
var iter__4523__auto__ = ((function (start,stop,y,s__16710__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__16709_$_iter__16717(s__16718){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__16710__$2,temp__5735__auto__){
return (function (){
var s__16718__$1 = s__16718;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__16718__$1);
if(temp__5735__auto____$1){
var s__16718__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16718__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16718__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16720 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16719 = (0);
while(true){
if((i__16719 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16719);
cljs.core.chunk_append(b__16720,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__16741 = (i__16719 + (1));
i__16719 = G__16741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16720),pucks$worlds$ai$world8$agents_$_iter__16709_$_iter__16717(cljs.core.chunk_rest(s__16718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16720),null);
}
} else {
var x = cljs.core.first(s__16718__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world8$agents_$_iter__16709_$_iter__16717(cljs.core.rest(s__16718__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__16710__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__16710__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$ai$world8$agents_$_iter__16709(cljs.core.rest(s__16710__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1581),(200)));
})()),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__16721(s__16722){
return (new cljs.core.LazySeq(null,(function (){
var s__16722__$1 = s__16722;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16722__$1);
if(temp__5735__auto__){
var s__16722__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16722__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16722__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16724 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16723 = (0);
while(true){
if((i__16723 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16723);
cljs.core.chunk_append(b__16724,(function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (i__16723,start,stop,x,c__4521__auto__,size__4522__auto__,b__16724,s__16722__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__16721_$_iter__16725(s__16726){
return (new cljs.core.LazySeq(null,((function (i__16723,start,stop,x,c__4521__auto__,size__4522__auto__,b__16724,s__16722__$2,temp__5735__auto__){
return (function (){
var s__16726__$1 = s__16726;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__16726__$1);
if(temp__5735__auto____$1){
var s__16726__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16726__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__16726__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__16728 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__16727 = (0);
while(true){
if((i__16727 < size__4522__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__16727);
cljs.core.chunk_append(b__16728,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__16742 = (i__16727 + (1));
i__16727 = G__16742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16728),pucks$worlds$ai$world8$agents_$_iter__16721_$_iter__16725(cljs.core.chunk_rest(s__16726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16728),null);
}
} else {
var y = cljs.core.first(s__16726__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world8$agents_$_iter__16721_$_iter__16725(cljs.core.rest(s__16726__$2)));
}
} else {
return null;
}
break;
}
});})(i__16723,start,stop,x,c__4521__auto__,size__4522__auto__,b__16724,s__16722__$2,temp__5735__auto__))
,null,null));
});})(i__16723,start,stop,x,c__4521__auto__,size__4522__auto__,b__16724,s__16722__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__16743 = (i__16723 + (1));
i__16723 = G__16743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16724),pucks$worlds$ai$world8$agents_$_iter__16721(cljs.core.chunk_rest(s__16722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16724),null);
}
} else {
var x = cljs.core.first(s__16722__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (start,stop,x,s__16722__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__16721_$_iter__16729(s__16730){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__16722__$2,temp__5735__auto__){
return (function (){
var s__16730__$1 = s__16730;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__16730__$1);
if(temp__5735__auto____$1){
var s__16730__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16730__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16730__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16732 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16731 = (0);
while(true){
if((i__16731 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16731);
cljs.core.chunk_append(b__16732,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__16744 = (i__16731 + (1));
i__16731 = G__16744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16732),pucks$worlds$ai$world8$agents_$_iter__16721_$_iter__16729(cljs.core.chunk_rest(s__16730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16732),null);
}
} else {
var y = cljs.core.first(s__16730__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world8$agents_$_iter__16721_$_iter__16729(cljs.core.rest(s__16730__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__16722__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__16722__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$ai$world8$agents_$_iter__16721(cljs.core.rest(s__16722__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1581),(200)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16708_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$ventbox.cljs$core$IFn$_invoke$arity$1(p1__16708_SHARP_))){
return pucks.worlds.ai.world8.ventbox(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p1__16708_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16708_SHARP_], null);
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p,loc){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,loc], null)], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery(pucks.agents.user.user)], null),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((4),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ventbox,true], null);
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((8),pucks.agents.zapper.zapper),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery(pucks.agents.shooter.shooter)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.donor.donor(cljs.core.cst$kw$key),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world8.rand_PLUS__((5)),pucks.worlds.ai.world8.rand_PLUS__((5))], null)], null)], 0));
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.mapdonor.mapdonor(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world8.rand_PLUS__((5)),pucks.worlds.ai.world8.rand_PLUS__((5))], null)], null)], 0));
}))], null)], 0)),cljs.core.shuffle((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__16733(s__16734){
return (new cljs.core.LazySeq(null,(function (){
var s__16734__$1 = s__16734;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16734__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__16734__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__16733_$_iter__16735(s__16736){
return (new cljs.core.LazySeq(null,((function (s__16734__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__16736__$1 = s__16736;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__16736__$1);
if(temp__5735__auto____$1){
var s__16736__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16736__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16736__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16738 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16737 = (0);
while(true){
if((i__16737 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16737);
cljs.core.chunk_append(b__16738,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__16745 = (i__16737 + (1));
i__16737 = G__16745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16738),pucks$worlds$ai$world8$agents_$_iter__16733_$_iter__16735(cljs.core.chunk_rest(s__16736__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16738),null);
}
} else {
var y = cljs.core.first(s__16736__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world8$agents_$_iter__16733_$_iter__16735(cljs.core.rest(s__16736__$2)));
}
} else {
return null;
}
break;
}
});})(s__16734__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__16734__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world8$agents_$_iter__16733(cljs.core.rest(s__16734__$1)));
} else {
var G__16746 = cljs.core.rest(s__16734__$1);
s__16734__$1 = G__16746;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1501),(200)));
})()))))], 0));
});
pucks.worlds.ai.world8.settings = (function pucks$worlds$ai$world8$settings(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$screen_DASH_size,(1600),cljs.core.cst$kw$scale,0.5,cljs.core.cst$kw$single_DASH_thread_DASH_mode,false,cljs.core.cst$kw$max_DASH_velocity,(40),cljs.core.cst$kw$torpedo_DASH_energy,0.02], null);
});
