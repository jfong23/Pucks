// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.ai.world7');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.donor');
goog.require('pucks.agents.shooter');
/**
 * Returns a positive or negative random number with magnitude less than n.
 */
pucks.worlds.ai.world7.rand_PLUS__ = (function pucks$worlds$ai$world7$rand_PLUS__(n){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * n)) - n);
});
/**
 * Returns a sequence of pucks that form a box of stones with a vent in the
 * middle and a gate on each side.
 */
pucks.worlds.ai.world7.ventbox = (function pucks$worlds$ai$world7$ventbox(p__13835){
var vec__13836 = p__13835;
var center_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13836,(0),null);
var center_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13836,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null)], 0))], null)], 0));
});
pucks.worlds.ai.world7.agents = (function pucks$worlds$ai$world7$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__13840(s__13841){
return (new cljs.core.LazySeq(null,(function (){
var s__13841__$1 = s__13841;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13841__$1);
if(temp__5735__auto__){
var s__13841__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13841__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13841__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13843 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13842 = (0);
while(true){
if((i__13842 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13842);
cljs.core.chunk_append(b__13843,(function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((600)));
var iter__4523__auto__ = ((function (i__13842,start,stop,y,c__4521__auto__,size__4522__auto__,b__13843,s__13841__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__13840_$_iter__13844(s__13845){
return (new cljs.core.LazySeq(null,((function (i__13842,start,stop,y,c__4521__auto__,size__4522__auto__,b__13843,s__13841__$2,temp__5735__auto__){
return (function (){
var s__13845__$1 = s__13845;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13845__$1);
if(temp__5735__auto____$1){
var s__13845__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13845__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__13845__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__13847 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__13846 = (0);
while(true){
if((i__13846 < size__4522__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__13846);
cljs.core.chunk_append(b__13847,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13870 = (i__13846 + (1));
i__13846 = G__13870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13847),pucks$worlds$ai$world7$agents_$_iter__13840_$_iter__13844(cljs.core.chunk_rest(s__13845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13847),null);
}
} else {
var x = cljs.core.first(s__13845__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world7$agents_$_iter__13840_$_iter__13844(cljs.core.rest(s__13845__$2)));
}
} else {
return null;
}
break;
}
});})(i__13842,start,stop,y,c__4521__auto__,size__4522__auto__,b__13843,s__13841__$2,temp__5735__auto__))
,null,null));
});})(i__13842,start,stop,y,c__4521__auto__,size__4522__auto__,b__13843,s__13841__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__13871 = (i__13842 + (1));
i__13842 = G__13871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13843),pucks$worlds$ai$world7$agents_$_iter__13840(cljs.core.chunk_rest(s__13841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13843),null);
}
} else {
var y = cljs.core.first(s__13841__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((600)));
var iter__4523__auto__ = ((function (start,stop,y,s__13841__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__13840_$_iter__13848(s__13849){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__13841__$2,temp__5735__auto__){
return (function (){
var s__13849__$1 = s__13849;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13849__$1);
if(temp__5735__auto____$1){
var s__13849__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13849__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13849__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13851 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13850 = (0);
while(true){
if((i__13850 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13850);
cljs.core.chunk_append(b__13851,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13872 = (i__13850 + (1));
i__13850 = G__13872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13851),pucks$worlds$ai$world7$agents_$_iter__13840_$_iter__13848(cljs.core.chunk_rest(s__13849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13851),null);
}
} else {
var x = cljs.core.first(s__13849__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world7$agents_$_iter__13840_$_iter__13848(cljs.core.rest(s__13849__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__13841__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__13841__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$ai$world7$agents_$_iter__13840(cljs.core.rest(s__13841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1581),(200)));
})()),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__13852(s__13853){
return (new cljs.core.LazySeq(null,(function (){
var s__13853__$1 = s__13853;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13853__$1);
if(temp__5735__auto__){
var s__13853__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13853__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13853__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13855 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13854 = (0);
while(true){
if((i__13854 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13854);
cljs.core.chunk_append(b__13855,(function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (i__13854,start,stop,x,c__4521__auto__,size__4522__auto__,b__13855,s__13853__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__13852_$_iter__13856(s__13857){
return (new cljs.core.LazySeq(null,((function (i__13854,start,stop,x,c__4521__auto__,size__4522__auto__,b__13855,s__13853__$2,temp__5735__auto__){
return (function (){
var s__13857__$1 = s__13857;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13857__$1);
if(temp__5735__auto____$1){
var s__13857__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13857__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__13857__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__13859 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__13858 = (0);
while(true){
if((i__13858 < size__4522__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__13858);
cljs.core.chunk_append(b__13859,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13873 = (i__13858 + (1));
i__13858 = G__13873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13859),pucks$worlds$ai$world7$agents_$_iter__13852_$_iter__13856(cljs.core.chunk_rest(s__13857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13859),null);
}
} else {
var y = cljs.core.first(s__13857__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world7$agents_$_iter__13852_$_iter__13856(cljs.core.rest(s__13857__$2)));
}
} else {
return null;
}
break;
}
});})(i__13854,start,stop,x,c__4521__auto__,size__4522__auto__,b__13855,s__13853__$2,temp__5735__auto__))
,null,null));
});})(i__13854,start,stop,x,c__4521__auto__,size__4522__auto__,b__13855,s__13853__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__13874 = (i__13854 + (1));
i__13854 = G__13874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13855),pucks$worlds$ai$world7$agents_$_iter__13852(cljs.core.chunk_rest(s__13853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13855),null);
}
} else {
var x = cljs.core.first(s__13853__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (start,stop,x,s__13853__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__13852_$_iter__13860(s__13861){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__13853__$2,temp__5735__auto__){
return (function (){
var s__13861__$1 = s__13861;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13861__$1);
if(temp__5735__auto____$1){
var s__13861__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13861__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13861__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13863 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13862 = (0);
while(true){
if((i__13862 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13862);
cljs.core.chunk_append(b__13863,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13875 = (i__13862 + (1));
i__13862 = G__13875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13863),pucks$worlds$ai$world7$agents_$_iter__13852_$_iter__13860(cljs.core.chunk_rest(s__13861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13863),null);
}
} else {
var y = cljs.core.first(s__13861__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world7$agents_$_iter__13852_$_iter__13860(cljs.core.rest(s__13861__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__13853__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__13853__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$ai$world7$agents_$_iter__13852(cljs.core.rest(s__13853__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1581),(200)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13839_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$ventbox.cljs$core$IFn$_invoke$arity$1(p1__13839_SHARP_))){
return pucks.worlds.ai.world7.ventbox(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p1__13839_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13839_SHARP_], null);
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p,loc){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,loc], null)], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery(pucks.agents.user.user)], null),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((4),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ventbox,true], null);
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((8),pucks.agents.zapper.zapper),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((4),(function (){
return pucks.agents.nursery.nursery(pucks.agents.shooter.shooter);
})),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((4),(function (){
return pucks.agents.nursery.nursery((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.donor.donor(cljs.core.cst$kw$key),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world7.rand_PLUS__((5)),pucks.worlds.ai.world7.rand_PLUS__((5))], null)], null)], 0));
}));
}))], 0)),cljs.core.shuffle((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__13864(s__13865){
return (new cljs.core.LazySeq(null,(function (){
var s__13865__$1 = s__13865;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13865__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13865__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__13864_$_iter__13866(s__13867){
return (new cljs.core.LazySeq(null,((function (s__13865__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13867__$1 = s__13867;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13867__$1);
if(temp__5735__auto____$1){
var s__13867__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13867__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13867__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13869 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13868 = (0);
while(true){
if((i__13868 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13868);
cljs.core.chunk_append(b__13869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__13876 = (i__13868 + (1));
i__13868 = G__13876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13869),pucks$worlds$ai$world7$agents_$_iter__13864_$_iter__13866(cljs.core.chunk_rest(s__13867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13869),null);
}
} else {
var y = cljs.core.first(s__13867__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world7$agents_$_iter__13864_$_iter__13866(cljs.core.rest(s__13867__$2)));
}
} else {
return null;
}
break;
}
});})(s__13865__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13865__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world7$agents_$_iter__13864(cljs.core.rest(s__13865__$1)));
} else {
var G__13877 = cljs.core.rest(s__13865__$1);
s__13865__$1 = G__13877;
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
pucks.worlds.ai.world7.settings = (function pucks$worlds$ai$world7$settings(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$screen_DASH_size,(1600),cljs.core.cst$kw$scale,0.5,cljs.core.cst$kw$single_DASH_thread_DASH_mode,false], null);
});
