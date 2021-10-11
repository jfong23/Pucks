// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.vector');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
propeller.push.instructions.vector._butlast = cljs.core.with_meta((function propeller$push$instructions$vector$_butlast(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14393_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__14393_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_butlast"], null));
propeller.push.instructions.vector._concat = cljs.core.with_meta((function propeller$push$instructions$vector$_concat(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14395_SHARP_,p2__14394_SHARP_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p2__14394_SHARP_,p1__14395_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_concat"], null));
propeller.push.instructions.vector._conj = cljs.core.with_meta((function propeller$push$instructions$vector$_conj(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__14397_SHARP_,p2__14396_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__14396_SHARP_,p1__14397_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_conj"], null));
propeller.push.instructions.vector._contains = cljs.core.with_meta((function propeller$push$instructions$vector$_contains(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__14399_SHARP_,p2__14398_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(p2__14398_SHARP_),p1__14399_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_contains"], null));
propeller.push.instructions.vector._emptyvector = cljs.core.with_meta((function propeller$push$instructions$vector$_emptyvector(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_emptyvector"], null));
propeller.push.instructions.vector._first = cljs.core.with_meta((function propeller$push$instructions$vector$_first(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__14400_SHARP_){
if(cljs.core.empty_QMARK_(p1__14400_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.first(p1__14400_SHARP_);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_first"], null));
propeller.push.instructions.vector._indexof = cljs.core.with_meta((function propeller$push$instructions$vector$_indexof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__14401_SHARP_,p2__14402_SHARP_){
return propeller.utils.indexof(p1__14401_SHARP_,p2__14402_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_indexof"], null));
propeller.push.instructions.vector._iterate = cljs.core.with_meta((function propeller$push$instructions$vector$_iterate(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
if(((propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$exec)) || (propeller.push.state.empty_stack_QMARK_(state,stack)))){
return state;
} else {
var vect = propeller.push.state.peek_stack(state,stack);
var popped_state = propeller.push.state.pop_stack(state,stack);
if(cljs.core.empty_QMARK_(vect)){
return propeller.push.state.pop_stack(popped_state,cljs.core.cst$kw$exec);
} else {
if(cljs.core.empty_QMARK_(cljs.core.rest(vect))){
return propeller.push.state.push_to_stack(popped_state,lit_stack,cljs.core.first(vect));
} else {
return propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$exec,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack),"_iterate"].join(''))),cljs.core.cst$kw$exec,cljs.core.vec(cljs.core.rest(vect))),cljs.core.cst$kw$exec,propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec)),lit_stack,cljs.core.first(vect));

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_iterate"], null));
propeller.push.instructions.vector._last = cljs.core.with_meta((function propeller$push$instructions$vector$_last(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__14403_SHARP_){
if(cljs.core.empty_QMARK_(p1__14403_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.last(p1__14403_SHARP_);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_last"], null));
propeller.push.instructions.vector._length = cljs.core.with_meta((function propeller$push$instructions$vector$_length(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_length"], null));
propeller.push.instructions.vector._nth = cljs.core.with_meta((function propeller$push$instructions$vector$_nth(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__14405_SHARP_,p2__14404_SHARP_){
if(cljs.core.empty_QMARK_(p2__14404_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__14404_SHARP_,cljs.core.mod(p1__14405_SHARP_,cljs.core.count(p2__14404_SHARP_)));
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_nth"], null));
propeller.push.instructions.vector._occurrencesof = cljs.core.with_meta((function propeller$push$instructions$vector$_occurrencesof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit,vect){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (lit_stack){
return (function (p1__14406_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lit,p1__14406_SHARP_);
});})(lit_stack))
,vect));
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_occurrencesof"], null));
propeller.push.instructions.vector._pushall = cljs.core.with_meta((function propeller$push$instructions$vector$_pushall(stack,state){
if(propeller.push.state.empty_stack_QMARK_(state,stack)){
return state;
} else {
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
var top_vector = propeller.push.state.peek_stack(state,stack);
var popped_state = propeller.push.state.pop_stack(state,stack);
return propeller.push.state.push_to_stack_many(popped_state,lit_stack,top_vector);
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_pushall"], null));
propeller.push.instructions.vector._remove = cljs.core.with_meta((function propeller$push$instructions$vector$_remove(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit,vect){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (lit_stack){
return (function (p1__14407_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lit,p1__14407_SHARP_);
});})(lit_stack))
,vect));
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_remove"], null));
propeller.push.instructions.vector._replace = cljs.core.with_meta((function propeller$push$instructions$vector$_replace(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit1,lit2,vect){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lit1,lit2]),vect);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_replace"], null));
propeller.push.instructions.vector._replacefirst = cljs.core.with_meta((function propeller$push$instructions$vector$_replacefirst(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit1,lit2,vect){
var replaceindex = propeller.utils.indexof(lit1,vect);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(replaceindex,(-1))){
return vect;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vect,replaceindex,lit2);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_replacefirst"], null));
propeller.push.instructions.vector._rest = cljs.core.with_meta((function propeller$push$instructions$vector$_rest(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14408_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__14408_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_rest"], null));
propeller.push.instructions.vector._reverse = cljs.core.with_meta((function propeller$push$instructions$vector$_reverse(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14409_SHARP_){
return cljs.core.vec(cljs.core.reverse(p1__14409_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_reverse"], null));
propeller.push.instructions.vector._set = cljs.core.with_meta((function propeller$push$instructions$vector$_set(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit,n,vect){
if(cljs.core.empty_QMARK_(vect)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vect,cljs.core.mod(n,cljs.core.count(vect)),lit);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,cljs.core.cst$kw$integer,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_set"], null));
propeller.push.instructions.vector._subvec = cljs.core.with_meta((function propeller$push$instructions$vector$_subvec(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (start_raw,stop_raw,vect){
var start = (function (){var x__4222__auto__ = cljs.core.count(vect);
var y__4223__auto__ = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = start_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var stop = (function (){var x__4222__auto__ = cljs.core.count(vect);
var y__4223__auto__ = (function (){var x__4219__auto__ = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = start_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var y__4220__auto__ = stop_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,start,stop);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.cst$kw$integer,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_subvec"], null));
propeller.push.instructions.vector._take = cljs.core.with_meta((function propeller$push$instructions$vector$_take(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14410_SHARP_,p2__14411_SHARP_){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__14410_SHARP_,p2__14411_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_take"], null));
var seq__14412_14460 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$vector_string], null));
var chunk__14419_14461 = null;
var count__14420_14462 = (0);
var i__14421_14463 = (0);
while(true){
if((i__14421_14463 < count__14420_14462)){
var stack__2790__auto___14464 = chunk__14419_14461.cljs$core$IIndexed$_nth$arity$2(null,i__14421_14463);
var seq__14422_14465 = cljs.core.seq(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__14424_14466 = null;
var count__14425_14467 = (0);
var i__14426_14468 = (0);
while(true){
if((i__14426_14468 < count__14425_14467)){
var func__2791__auto___14469 = chunk__14424_14466.cljs$core$IIndexed$_nth$arity$2(null,i__14426_14468);
var instruction_name__2792__auto___14470 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14464),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14469)))].join(''));
var metadata__2793__auto___14471 = (function (){var G__14449 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14469),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14464,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14464)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14469))))));
var fexpr__14448 = ((function (seq__14422_14465,chunk__14424_14466,count__14425_14467,i__14426_14468,seq__14412_14460,chunk__14419_14461,count__14420_14462,i__14421_14463,G__14449,instruction_name__2792__auto___14470,func__2791__auto___14469,stack__2790__auto___14464){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14422_14465,chunk__14424_14466,count__14425_14467,i__14426_14468,seq__14412_14460,chunk__14419_14461,count__14420_14462,i__14421_14463,G__14449,instruction_name__2792__auto___14470,func__2791__auto___14469,stack__2790__auto___14464))
;
return fexpr__14448(G__14449);
})();
var new_func__2794__auto___14472 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14469,stack__2790__auto___14464),metadata__2793__auto___14471);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14470,new_func__2794__auto___14472);


var G__14473 = seq__14422_14465;
var G__14474 = chunk__14424_14466;
var G__14475 = count__14425_14467;
var G__14476 = (i__14426_14468 + (1));
seq__14422_14465 = G__14473;
chunk__14424_14466 = G__14474;
count__14425_14467 = G__14475;
i__14426_14468 = G__14476;
continue;
} else {
var temp__5735__auto___14477 = cljs.core.seq(seq__14422_14465);
if(temp__5735__auto___14477){
var seq__14422_14478__$1 = temp__5735__auto___14477;
if(cljs.core.chunked_seq_QMARK_(seq__14422_14478__$1)){
var c__4550__auto___14479 = cljs.core.chunk_first(seq__14422_14478__$1);
var G__14480 = cljs.core.chunk_rest(seq__14422_14478__$1);
var G__14481 = c__4550__auto___14479;
var G__14482 = cljs.core.count(c__4550__auto___14479);
var G__14483 = (0);
seq__14422_14465 = G__14480;
chunk__14424_14466 = G__14481;
count__14425_14467 = G__14482;
i__14426_14468 = G__14483;
continue;
} else {
var func__2791__auto___14484 = cljs.core.first(seq__14422_14478__$1);
var instruction_name__2792__auto___14485 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14464),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14484)))].join(''));
var metadata__2793__auto___14486 = (function (){var G__14451 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14484),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14464,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14464)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14484))))));
var fexpr__14450 = ((function (seq__14422_14465,chunk__14424_14466,count__14425_14467,i__14426_14468,seq__14412_14460,chunk__14419_14461,count__14420_14462,i__14421_14463,G__14451,instruction_name__2792__auto___14485,func__2791__auto___14484,seq__14422_14478__$1,temp__5735__auto___14477,stack__2790__auto___14464){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14422_14465,chunk__14424_14466,count__14425_14467,i__14426_14468,seq__14412_14460,chunk__14419_14461,count__14420_14462,i__14421_14463,G__14451,instruction_name__2792__auto___14485,func__2791__auto___14484,seq__14422_14478__$1,temp__5735__auto___14477,stack__2790__auto___14464))
;
return fexpr__14450(G__14451);
})();
var new_func__2794__auto___14487 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14484,stack__2790__auto___14464),metadata__2793__auto___14486);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14485,new_func__2794__auto___14487);


var G__14488 = cljs.core.next(seq__14422_14478__$1);
var G__14489 = null;
var G__14490 = (0);
var G__14491 = (0);
seq__14422_14465 = G__14488;
chunk__14424_14466 = G__14489;
count__14425_14467 = G__14490;
i__14426_14468 = G__14491;
continue;
}
} else {
}
}
break;
}

var G__14492 = seq__14412_14460;
var G__14493 = chunk__14419_14461;
var G__14494 = count__14420_14462;
var G__14495 = (i__14421_14463 + (1));
seq__14412_14460 = G__14492;
chunk__14419_14461 = G__14493;
count__14420_14462 = G__14494;
i__14421_14463 = G__14495;
continue;
} else {
var temp__5735__auto___14496 = cljs.core.seq(seq__14412_14460);
if(temp__5735__auto___14496){
var seq__14412_14497__$1 = temp__5735__auto___14496;
if(cljs.core.chunked_seq_QMARK_(seq__14412_14497__$1)){
var c__4550__auto___14498 = cljs.core.chunk_first(seq__14412_14497__$1);
var G__14499 = cljs.core.chunk_rest(seq__14412_14497__$1);
var G__14500 = c__4550__auto___14498;
var G__14501 = cljs.core.count(c__4550__auto___14498);
var G__14502 = (0);
seq__14412_14460 = G__14499;
chunk__14419_14461 = G__14500;
count__14420_14462 = G__14501;
i__14421_14463 = G__14502;
continue;
} else {
var stack__2790__auto___14503 = cljs.core.first(seq__14412_14497__$1);
var seq__14413_14504 = cljs.core.seq(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__14415_14505 = null;
var count__14416_14506 = (0);
var i__14417_14507 = (0);
while(true){
if((i__14417_14507 < count__14416_14506)){
var func__2791__auto___14508 = chunk__14415_14505.cljs$core$IIndexed$_nth$arity$2(null,i__14417_14507);
var instruction_name__2792__auto___14509 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14503),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14508)))].join(''));
var metadata__2793__auto___14510 = (function (){var G__14457 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14508),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14503,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14503)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14508))))));
var fexpr__14456 = ((function (seq__14413_14504,chunk__14415_14505,count__14416_14506,i__14417_14507,seq__14412_14460,chunk__14419_14461,count__14420_14462,i__14421_14463,G__14457,instruction_name__2792__auto___14509,func__2791__auto___14508,stack__2790__auto___14503,seq__14412_14497__$1,temp__5735__auto___14496){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14413_14504,chunk__14415_14505,count__14416_14506,i__14417_14507,seq__14412_14460,chunk__14419_14461,count__14420_14462,i__14421_14463,G__14457,instruction_name__2792__auto___14509,func__2791__auto___14508,stack__2790__auto___14503,seq__14412_14497__$1,temp__5735__auto___14496))
;
return fexpr__14456(G__14457);
})();
var new_func__2794__auto___14511 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14508,stack__2790__auto___14503),metadata__2793__auto___14510);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14509,new_func__2794__auto___14511);


var G__14512 = seq__14413_14504;
var G__14513 = chunk__14415_14505;
var G__14514 = count__14416_14506;
var G__14515 = (i__14417_14507 + (1));
seq__14413_14504 = G__14512;
chunk__14415_14505 = G__14513;
count__14416_14506 = G__14514;
i__14417_14507 = G__14515;
continue;
} else {
var temp__5735__auto___14516__$1 = cljs.core.seq(seq__14413_14504);
if(temp__5735__auto___14516__$1){
var seq__14413_14517__$1 = temp__5735__auto___14516__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14413_14517__$1)){
var c__4550__auto___14518 = cljs.core.chunk_first(seq__14413_14517__$1);
var G__14519 = cljs.core.chunk_rest(seq__14413_14517__$1);
var G__14520 = c__4550__auto___14518;
var G__14521 = cljs.core.count(c__4550__auto___14518);
var G__14522 = (0);
seq__14413_14504 = G__14519;
chunk__14415_14505 = G__14520;
count__14416_14506 = G__14521;
i__14417_14507 = G__14522;
continue;
} else {
var func__2791__auto___14523 = cljs.core.first(seq__14413_14517__$1);
var instruction_name__2792__auto___14524 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14503),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14523)))].join(''));
var metadata__2793__auto___14525 = (function (){var G__14459 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14503,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14503)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14523))))));
var fexpr__14458 = ((function (seq__14413_14504,chunk__14415_14505,count__14416_14506,i__14417_14507,seq__14412_14460,chunk__14419_14461,count__14420_14462,i__14421_14463,G__14459,instruction_name__2792__auto___14524,func__2791__auto___14523,seq__14413_14517__$1,temp__5735__auto___14516__$1,stack__2790__auto___14503,seq__14412_14497__$1,temp__5735__auto___14496){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14413_14504,chunk__14415_14505,count__14416_14506,i__14417_14507,seq__14412_14460,chunk__14419_14461,count__14420_14462,i__14421_14463,G__14459,instruction_name__2792__auto___14524,func__2791__auto___14523,seq__14413_14517__$1,temp__5735__auto___14516__$1,stack__2790__auto___14503,seq__14412_14497__$1,temp__5735__auto___14496))
;
return fexpr__14458(G__14459);
})();
var new_func__2794__auto___14526 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14523,stack__2790__auto___14503),metadata__2793__auto___14525);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14524,new_func__2794__auto___14526);


var G__14527 = cljs.core.next(seq__14413_14517__$1);
var G__14528 = null;
var G__14529 = (0);
var G__14530 = (0);
seq__14413_14504 = G__14527;
chunk__14415_14505 = G__14528;
count__14416_14506 = G__14529;
i__14417_14507 = G__14530;
continue;
}
} else {
}
}
break;
}

var G__14531 = cljs.core.next(seq__14412_14497__$1);
var G__14532 = null;
var G__14533 = (0);
var G__14534 = (0);
seq__14412_14460 = G__14531;
chunk__14419_14461 = G__14532;
count__14420_14462 = G__14533;
i__14421_14463 = G__14534;
continue;
}
} else {
}
}
break;
}
