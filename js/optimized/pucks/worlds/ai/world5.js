// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.ai.world5');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
pucks.worlds.ai.world5.agents = (function pucks$worlds$ai$world5$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__14108(s__14109){
return (new cljs.core.LazySeq(null,(function (){
var s__14109__$1 = s__14109;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14109__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__14109__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__14108_$_iter__14110(s__14111){
return (new cljs.core.LazySeq(null,((function (s__14109__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__14111__$1 = s__14111;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14111__$1);
if(temp__5735__auto____$1){
var s__14111__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14111__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14111__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14113 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14112 = (0);
while(true){
if((i__14112 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14112);
cljs.core.chunk_append(b__14113,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$radius,(70)], null)], 0)));

var G__14144 = (i__14112 + (1));
i__14112 = G__14144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14113),pucks$worlds$ai$world5$agents_$_iter__14108_$_iter__14110(cljs.core.chunk_rest(s__14111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14113),null);
}
} else {
var y = cljs.core.first(s__14111__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$radius,(70)], null)], 0)),pucks$worlds$ai$world5$agents_$_iter__14108_$_iter__14110(cljs.core.rest(s__14111__$2)));
}
} else {
return null;
}
break;
}
});})(s__14109__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__14109__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(751),(100))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world5$agents_$_iter__14108(cljs.core.rest(s__14109__$1)));
} else {
var G__14145 = cljs.core.rest(s__14109__$1);
s__14109__$1 = G__14145;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(751),(100)));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__14114(s__14115){
return (new cljs.core.LazySeq(null,(function (){
var s__14115__$1 = s__14115;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14115__$1);
if(temp__5735__auto__){
var s__14115__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14115__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14115__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14117 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14116 = (0);
while(true){
if((i__14116 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14116);
cljs.core.chunk_append(b__14117,(function (){var start = cljs.core.rand_int((800));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (i__14116,start,stop,y,c__4521__auto__,size__4522__auto__,b__14117,s__14115__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__14114_$_iter__14118(s__14119){
return (new cljs.core.LazySeq(null,((function (i__14116,start,stop,y,c__4521__auto__,size__4522__auto__,b__14117,s__14115__$2,temp__5735__auto__){
return (function (){
var s__14119__$1 = s__14119;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14119__$1);
if(temp__5735__auto____$1){
var s__14119__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14119__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__14119__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__14121 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__14120 = (0);
while(true){
if((i__14120 < size__4522__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__14120);
cljs.core.chunk_append(b__14121,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__14146 = (i__14120 + (1));
i__14120 = G__14146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14121),pucks$worlds$ai$world5$agents_$_iter__14114_$_iter__14118(cljs.core.chunk_rest(s__14119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14121),null);
}
} else {
var x = cljs.core.first(s__14119__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world5$agents_$_iter__14114_$_iter__14118(cljs.core.rest(s__14119__$2)));
}
} else {
return null;
}
break;
}
});})(i__14116,start,stop,y,c__4521__auto__,size__4522__auto__,b__14117,s__14115__$2,temp__5735__auto__))
,null,null));
});})(i__14116,start,stop,y,c__4521__auto__,size__4522__auto__,b__14117,s__14115__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__14147 = (i__14116 + (1));
i__14116 = G__14147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14117),pucks$worlds$ai$world5$agents_$_iter__14114(cljs.core.chunk_rest(s__14115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14117),null);
}
} else {
var y = cljs.core.first(s__14115__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((800));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (start,stop,y,s__14115__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__14114_$_iter__14122(s__14123){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__14115__$2,temp__5735__auto__){
return (function (){
var s__14123__$1 = s__14123;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14123__$1);
if(temp__5735__auto____$1){
var s__14123__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14123__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14123__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14125 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14124 = (0);
while(true){
if((i__14124 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14124);
cljs.core.chunk_append(b__14125,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__14148 = (i__14124 + (1));
i__14124 = G__14148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14125),pucks$worlds$ai$world5$agents_$_iter__14114_$_iter__14122(cljs.core.chunk_rest(s__14123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14125),null);
}
} else {
var x = cljs.core.first(s__14123__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world5$agents_$_iter__14114_$_iter__14122(cljs.core.rest(s__14123__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__14115__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__14115__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$ai$world5$agents_$_iter__14114(cljs.core.rest(s__14115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(781),(200)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__14126(s__14127){
return (new cljs.core.LazySeq(null,(function (){
var s__14127__$1 = s__14127;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14127__$1);
if(temp__5735__auto__){
var s__14127__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14127__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14127__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14129 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14128 = (0);
while(true){
if((i__14128 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14128);
cljs.core.chunk_append(b__14129,(function (){var start = cljs.core.rand_int((800));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (i__14128,start,stop,x,c__4521__auto__,size__4522__auto__,b__14129,s__14127__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__14126_$_iter__14130(s__14131){
return (new cljs.core.LazySeq(null,((function (i__14128,start,stop,x,c__4521__auto__,size__4522__auto__,b__14129,s__14127__$2,temp__5735__auto__){
return (function (){
var s__14131__$1 = s__14131;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14131__$1);
if(temp__5735__auto____$1){
var s__14131__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14131__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__14131__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__14133 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__14132 = (0);
while(true){
if((i__14132 < size__4522__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__14132);
cljs.core.chunk_append(b__14133,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__14149 = (i__14132 + (1));
i__14132 = G__14149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14133),pucks$worlds$ai$world5$agents_$_iter__14126_$_iter__14130(cljs.core.chunk_rest(s__14131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14133),null);
}
} else {
var y = cljs.core.first(s__14131__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world5$agents_$_iter__14126_$_iter__14130(cljs.core.rest(s__14131__$2)));
}
} else {
return null;
}
break;
}
});})(i__14128,start,stop,x,c__4521__auto__,size__4522__auto__,b__14129,s__14127__$2,temp__5735__auto__))
,null,null));
});})(i__14128,start,stop,x,c__4521__auto__,size__4522__auto__,b__14129,s__14127__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__14150 = (i__14128 + (1));
i__14128 = G__14150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14129),pucks$worlds$ai$world5$agents_$_iter__14126(cljs.core.chunk_rest(s__14127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14129),null);
}
} else {
var x = cljs.core.first(s__14127__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((800));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (start,stop,x,s__14127__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__14126_$_iter__14134(s__14135){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__14127__$2,temp__5735__auto__){
return (function (){
var s__14135__$1 = s__14135;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14135__$1);
if(temp__5735__auto____$1){
var s__14135__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14135__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14135__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14137 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14136 = (0);
while(true){
if((i__14136 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14136);
cljs.core.chunk_append(b__14137,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__14151 = (i__14136 + (1));
i__14136 = G__14151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14137),pucks$worlds$ai$world5$agents_$_iter__14126_$_iter__14134(cljs.core.chunk_rest(s__14135__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14137),null);
}
} else {
var y = cljs.core.first(s__14135__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world5$agents_$_iter__14126_$_iter__14134(cljs.core.rest(s__14135__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__14127__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__14127__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$ai$world5$agents_$_iter__14126(cljs.core.rest(s__14127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(781),(200)));
})()),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p,loc){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,loc], null)], 0));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery(pucks.agents.user.user),pucks.agents.vent.vent(),pucks.agents.zapper.zapper(),pucks.agents.zapper.zapper()], null),cljs.core.shuffle((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__14138(s__14139){
return (new cljs.core.LazySeq(null,(function (){
var s__14139__$1 = s__14139;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14139__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__14139__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__14138_$_iter__14140(s__14141){
return (new cljs.core.LazySeq(null,((function (s__14139__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__14141__$1 = s__14141;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14141__$1);
if(temp__5735__auto____$1){
var s__14141__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14141__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14141__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14143 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14142 = (0);
while(true){
if((i__14142 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14142);
cljs.core.chunk_append(b__14143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__14152 = (i__14142 + (1));
i__14142 = G__14152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14143),pucks$worlds$ai$world5$agents_$_iter__14138_$_iter__14140(cljs.core.chunk_rest(s__14141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14143),null);
}
} else {
var y = cljs.core.first(s__14141__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world5$agents_$_iter__14138_$_iter__14140(cljs.core.rest(s__14141__$2)));
}
} else {
return null;
}
break;
}
});})(s__14139__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__14139__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world5$agents_$_iter__14138(cljs.core.rest(s__14139__$1)));
} else {
var G__14153 = cljs.core.rest(s__14139__$1);
s__14139__$1 = G__14153;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null));
})()))], 0));
});
pucks.worlds.ai.world5.settings = (function pucks$worlds$ai$world5$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
