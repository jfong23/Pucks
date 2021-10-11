// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world13');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.linear');
goog.require('pucks.agents.zigzag');
goog.require('pucks.agents.swarmer');
pucks.worlds.dev.world13.agents = (function pucks$worlds$dev$world13$agents(){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__13941(s__13942){
return (new cljs.core.LazySeq(null,(function (){
var s__13942__$1 = s__13942;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13942__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13942__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__13941_$_iter__13943(s__13944){
return (new cljs.core.LazySeq(null,((function (s__13942__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13944__$1 = s__13944;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13944__$1);
if(temp__5735__auto____$1){
var s__13944__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13944__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13944__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13946 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13945 = (0);
while(true){
if((i__13945 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13945);
cljs.core.chunk_append(b__13946,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$radius,(70)], null)], 0)));

var G__13977 = (i__13945 + (1));
i__13945 = G__13977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13946),pucks$worlds$dev$world13$agents_$_iter__13941_$_iter__13943(cljs.core.chunk_rest(s__13944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13946),null);
}
} else {
var y = cljs.core.first(s__13944__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$radius,(70)], null)], 0)),pucks$worlds$dev$world13$agents_$_iter__13941_$_iter__13943(cljs.core.rest(s__13944__$2)));
}
} else {
return null;
}
break;
}
});})(s__13942__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13942__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(1551),(100))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world13$agents_$_iter__13941(cljs.core.rest(s__13942__$1)));
} else {
var G__13978 = cljs.core.rest(s__13942__$1);
s__13942__$1 = G__13978;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(1551),(100)));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__13947(s__13948){
return (new cljs.core.LazySeq(null,(function (){
var s__13948__$1 = s__13948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13948__$1);
if(temp__5735__auto__){
var s__13948__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13948__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13948__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13950 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13949 = (0);
while(true){
if((i__13949 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13949);
cljs.core.chunk_append(b__13950,(function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((600)));
var iter__4523__auto__ = ((function (i__13949,start,stop,y,c__4521__auto__,size__4522__auto__,b__13950,s__13948__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__13947_$_iter__13951(s__13952){
return (new cljs.core.LazySeq(null,((function (i__13949,start,stop,y,c__4521__auto__,size__4522__auto__,b__13950,s__13948__$2,temp__5735__auto__){
return (function (){
var s__13952__$1 = s__13952;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13952__$1);
if(temp__5735__auto____$1){
var s__13952__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13952__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__13952__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__13954 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__13953 = (0);
while(true){
if((i__13953 < size__4522__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__13953);
cljs.core.chunk_append(b__13954,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13979 = (i__13953 + (1));
i__13953 = G__13979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13954),pucks$worlds$dev$world13$agents_$_iter__13947_$_iter__13951(cljs.core.chunk_rest(s__13952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13954),null);
}
} else {
var x = cljs.core.first(s__13952__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world13$agents_$_iter__13947_$_iter__13951(cljs.core.rest(s__13952__$2)));
}
} else {
return null;
}
break;
}
});})(i__13949,start,stop,y,c__4521__auto__,size__4522__auto__,b__13950,s__13948__$2,temp__5735__auto__))
,null,null));
});})(i__13949,start,stop,y,c__4521__auto__,size__4522__auto__,b__13950,s__13948__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__13980 = (i__13949 + (1));
i__13949 = G__13980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13950),pucks$worlds$dev$world13$agents_$_iter__13947(cljs.core.chunk_rest(s__13948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13950),null);
}
} else {
var y = cljs.core.first(s__13948__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((600)));
var iter__4523__auto__ = ((function (start,stop,y,s__13948__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__13947_$_iter__13955(s__13956){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__13948__$2,temp__5735__auto__){
return (function (){
var s__13956__$1 = s__13956;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13956__$1);
if(temp__5735__auto____$1){
var s__13956__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13956__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13956__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13958 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13957 = (0);
while(true){
if((i__13957 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13957);
cljs.core.chunk_append(b__13958,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13981 = (i__13957 + (1));
i__13957 = G__13981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13958),pucks$worlds$dev$world13$agents_$_iter__13947_$_iter__13955(cljs.core.chunk_rest(s__13956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13958),null);
}
} else {
var x = cljs.core.first(s__13956__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world13$agents_$_iter__13947_$_iter__13955(cljs.core.rest(s__13956__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__13948__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__13948__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$dev$world13$agents_$_iter__13947(cljs.core.rest(s__13948__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1581),(200)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__13959(s__13960){
return (new cljs.core.LazySeq(null,(function (){
var s__13960__$1 = s__13960;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13960__$1);
if(temp__5735__auto__){
var s__13960__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13960__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13960__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13962 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13961 = (0);
while(true){
if((i__13961 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13961);
cljs.core.chunk_append(b__13962,(function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (i__13961,start,stop,x,c__4521__auto__,size__4522__auto__,b__13962,s__13960__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__13959_$_iter__13963(s__13964){
return (new cljs.core.LazySeq(null,((function (i__13961,start,stop,x,c__4521__auto__,size__4522__auto__,b__13962,s__13960__$2,temp__5735__auto__){
return (function (){
var s__13964__$1 = s__13964;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13964__$1);
if(temp__5735__auto____$1){
var s__13964__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13964__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__13964__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__13966 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__13965 = (0);
while(true){
if((i__13965 < size__4522__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__13965);
cljs.core.chunk_append(b__13966,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13982 = (i__13965 + (1));
i__13965 = G__13982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13966),pucks$worlds$dev$world13$agents_$_iter__13959_$_iter__13963(cljs.core.chunk_rest(s__13964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13966),null);
}
} else {
var y = cljs.core.first(s__13964__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world13$agents_$_iter__13959_$_iter__13963(cljs.core.rest(s__13964__$2)));
}
} else {
return null;
}
break;
}
});})(i__13961,start,stop,x,c__4521__auto__,size__4522__auto__,b__13962,s__13960__$2,temp__5735__auto__))
,null,null));
});})(i__13961,start,stop,x,c__4521__auto__,size__4522__auto__,b__13962,s__13960__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__13983 = (i__13961 + (1));
i__13961 = G__13983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13962),pucks$worlds$dev$world13$agents_$_iter__13959(cljs.core.chunk_rest(s__13960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13962),null);
}
} else {
var x = cljs.core.first(s__13960__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((1600));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (start,stop,x,s__13960__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__13959_$_iter__13967(s__13968){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__13960__$2,temp__5735__auto__){
return (function (){
var s__13968__$1 = s__13968;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13968__$1);
if(temp__5735__auto____$1){
var s__13968__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13968__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13968__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13970 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13969 = (0);
while(true){
if((i__13969 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13969);
cljs.core.chunk_append(b__13970,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13984 = (i__13969 + (1));
i__13969 = G__13984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13970),pucks$worlds$dev$world13$agents_$_iter__13959_$_iter__13967(cljs.core.chunk_rest(s__13968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13970),null);
}
} else {
var y = cljs.core.first(s__13968__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world13$agents_$_iter__13959_$_iter__13967(cljs.core.rest(s__13968__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__13960__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__13960__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$dev$world13$agents_$_iter__13959(cljs.core.rest(s__13960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1581),(200)));
})()),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p,loc){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,loc], null)], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((8),(function (){
return pucks.agents.nursery.nursery(pucks.agents.linear.linear);
})),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((8),(function (){
return pucks.agents.nursery.nursery(pucks.agents.swarmer.swarmer);
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((8),(function (){
return pucks.agents.nursery.nursery(pucks.agents.zigzag.zigzag);
})),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((24),(function (){
return pucks.agents.vent.vent();
})),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((8),(function (){
return pucks.agents.zapper.zapper();
}))], 0)),cljs.core.shuffle((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__13971(s__13972){
return (new cljs.core.LazySeq(null,(function (){
var s__13972__$1 = s__13972;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13972__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13972__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__13971_$_iter__13973(s__13974){
return (new cljs.core.LazySeq(null,((function (s__13972__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13974__$1 = s__13974;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13974__$1);
if(temp__5735__auto____$1){
var s__13974__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13974__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13974__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13976 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13975 = (0);
while(true){
if((i__13975 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13975);
cljs.core.chunk_append(b__13976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__13985 = (i__13975 + (1));
i__13975 = G__13985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13976),pucks$worlds$dev$world13$agents_$_iter__13971_$_iter__13973(cljs.core.chunk_rest(s__13974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13976),null);
}
} else {
var y = cljs.core.first(s__13974__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$dev$world13$agents_$_iter__13971_$_iter__13973(cljs.core.rest(s__13974__$2)));
}
} else {
return null;
}
break;
}
});})(s__13972__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13972__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world13$agents_$_iter__13971(cljs.core.rest(s__13972__$1)));
} else {
var G__13986 = cljs.core.rest(s__13972__$1);
s__13972__$1 = G__13986;
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
})()))], 0)));
});
pucks.worlds.dev.world13.settings = (function pucks$worlds$dev$world13$settings(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$screen_DASH_size,(1600),cljs.core.cst$kw$scale,0.5,cljs.core.cst$kw$single_DASH_thread_DASH_mode,false], null);
});
