// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.polymorphic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.globals');
propeller.push.instructions.polymorphic._dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup(stack,state){
var top_item = propeller.push.state.peek_stack(state,stack);
if(propeller.push.state.empty_stack_QMARK_(state,stack)){
return state;
} else {
return propeller.push.state.push_to_stack(state,stack,top_item);
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_dup"], null));
propeller.push.instructions.polymorphic._dup_times = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_times(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var n = (function (){var x__4222__auto__ = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var y__4223__auto__ = ((propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size(state,stack)) + (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_item = propeller.push.state.peek_stack(popped_state,stack);
var top_item_dup = cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(top_item));
if(((0) < n)){
return propeller.push.state.push_to_stack_many(popped_state,stack,top_item_dup);
} else {
return propeller.push.state.pop_stack(popped_state,stack);

}
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_dup_times"], null));
propeller.push.instructions.polymorphic._dup_items = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_items(stack,state){
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)){
return state;
} else {
var n = (function (){var x__4222__auto__ = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var y__4223__auto__ = (propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size(state,stack));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_items = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack));
return propeller.push.state.push_to_stack_many(popped_state,stack,top_items);
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_dup_items"], null));
propeller.push.instructions.polymorphic._empty = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_empty(stack,state){
return propeller.push.state.push_to_stack(state,cljs.core.cst$kw$boolean,propeller.push.state.empty_stack_QMARK_(state,stack));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_empty"], null));
propeller.push.instructions.polymorphic._eq = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_eq(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_eq"], null));
propeller.push.instructions.polymorphic._flush = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_flush(stack,state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,stack,cljs.core.List.EMPTY);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_flush"], null));
propeller.push.instructions.polymorphic._pop = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_pop(stack,state){
return propeller.push.state.pop_stack(state,stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_pop"], null));
propeller.push.instructions.polymorphic._rot = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_rot(stack,state){
if(((3) <= cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack)))){
var top_three = propeller.push.state.peek_stack_many(state,stack,(3));
var popped_state = propeller.push.state.pop_stack_many(state,stack,(3));
var top_three_rot = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(top_three,cljs.core.last(top_three)));
return propeller.push.state.push_to_stack_many(popped_state,stack,top_three_rot);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_rot"], null));
propeller.push.instructions.polymorphic._shove = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_shove(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_item = propeller.push.state.peek_stack(popped_state,stack);
var popped_state__$1 = propeller.push.state.pop_stack(popped_state,stack);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state__$1,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(popped_state__$1,stack,((function (index_raw,popped_state,top_item,popped_state__$1,index){
return (function (p1__16457_SHARP_){
return propeller.utils.not_lazy(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,p1__16457_SHARP_),(new cljs.core.List(null,top_item,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,p1__16457_SHARP_)], 0)));
});})(index_raw,popped_state,top_item,popped_state__$1,index))
);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_shove"], null));
propeller.push.instructions.polymorphic._stack_depth = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_stack_depth(stack,state){
var stack_depth = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
return propeller.push.state.push_to_stack(state,cljs.core.cst$kw$integer,stack_depth);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_stack_depth"], null));
propeller.push.instructions.polymorphic._swap = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_swap(stack,state){
if(((2) <= cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack)))){
var top_two = propeller.push.state.peek_stack_many(state,stack,(2));
var popped_state = propeller.push.state.pop_stack_many(state,stack,(2));
return propeller.push.state.push_to_stack_many(popped_state,stack,cljs.core.reverse(top_two));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_swap"], null));
propeller.push.instructions.polymorphic._yank = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack),index);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(popped_state,stack,((function (index_raw,popped_state,index,indexed_item){
return (function (p1__16458_SHARP_){
return propeller.utils.not_lazy(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,indexed_item,null,(1),null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,p1__16458_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,p1__16458_SHARP_))], 0)));
});})(index_raw,popped_state,index,indexed_item))
);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_yank"], null));
propeller.push.instructions.polymorphic._yank_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank_dup(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack),index);
return propeller.push.state.push_to_stack(popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_yank_dup"], null));
propeller.push.instructions.polymorphic._deep_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_deep_dup(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)),index);
return propeller.push.state.push_to_stack(popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_deep_dup"], null));
var seq__16459_16507 = cljs.core.seq(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$char,cljs.core.cst$kw$code,cljs.core.cst$kw$exec,cljs.core.cst$kw$float,cljs.core.cst$kw$integer,cljs.core.cst$kw$string,cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$vector_string], null));
var chunk__16466_16508 = null;
var count__16467_16509 = (0);
var i__16468_16510 = (0);
while(true){
if((i__16468_16510 < count__16467_16509)){
var stack__2790__auto___16511 = chunk__16466_16508.cljs$core$IIndexed$_nth$arity$2(null,i__16468_16510);
var seq__16469_16512 = cljs.core.seq(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__16471_16513 = null;
var count__16472_16514 = (0);
var i__16473_16515 = (0);
while(true){
if((i__16473_16515 < count__16472_16514)){
var func__2791__auto___16516 = chunk__16471_16513.cljs$core$IIndexed$_nth$arity$2(null,i__16473_16515);
var instruction_name__2792__auto___16517 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___16511),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16516)))].join(''));
var metadata__2793__auto___16518 = (function (){var G__16496 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___16516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___16511,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___16511)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16516))))));
var fexpr__16495 = ((function (seq__16469_16512,chunk__16471_16513,count__16472_16514,i__16473_16515,seq__16459_16507,chunk__16466_16508,count__16467_16509,i__16468_16510,G__16496,instruction_name__2792__auto___16517,func__2791__auto___16516,stack__2790__auto___16511){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__16469_16512,chunk__16471_16513,count__16472_16514,i__16473_16515,seq__16459_16507,chunk__16466_16508,count__16467_16509,i__16468_16510,G__16496,instruction_name__2792__auto___16517,func__2791__auto___16516,stack__2790__auto___16511))
;
return fexpr__16495(G__16496);
})();
var new_func__2794__auto___16519 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___16516,stack__2790__auto___16511),metadata__2793__auto___16518);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___16517,new_func__2794__auto___16519);


var G__16520 = seq__16469_16512;
var G__16521 = chunk__16471_16513;
var G__16522 = count__16472_16514;
var G__16523 = (i__16473_16515 + (1));
seq__16469_16512 = G__16520;
chunk__16471_16513 = G__16521;
count__16472_16514 = G__16522;
i__16473_16515 = G__16523;
continue;
} else {
var temp__5735__auto___16524 = cljs.core.seq(seq__16469_16512);
if(temp__5735__auto___16524){
var seq__16469_16525__$1 = temp__5735__auto___16524;
if(cljs.core.chunked_seq_QMARK_(seq__16469_16525__$1)){
var c__4550__auto___16526 = cljs.core.chunk_first(seq__16469_16525__$1);
var G__16527 = cljs.core.chunk_rest(seq__16469_16525__$1);
var G__16528 = c__4550__auto___16526;
var G__16529 = cljs.core.count(c__4550__auto___16526);
var G__16530 = (0);
seq__16469_16512 = G__16527;
chunk__16471_16513 = G__16528;
count__16472_16514 = G__16529;
i__16473_16515 = G__16530;
continue;
} else {
var func__2791__auto___16531 = cljs.core.first(seq__16469_16525__$1);
var instruction_name__2792__auto___16532 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___16511),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16531)))].join(''));
var metadata__2793__auto___16533 = (function (){var G__16498 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___16531),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___16511,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___16511)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16531))))));
var fexpr__16497 = ((function (seq__16469_16512,chunk__16471_16513,count__16472_16514,i__16473_16515,seq__16459_16507,chunk__16466_16508,count__16467_16509,i__16468_16510,G__16498,instruction_name__2792__auto___16532,func__2791__auto___16531,seq__16469_16525__$1,temp__5735__auto___16524,stack__2790__auto___16511){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__16469_16512,chunk__16471_16513,count__16472_16514,i__16473_16515,seq__16459_16507,chunk__16466_16508,count__16467_16509,i__16468_16510,G__16498,instruction_name__2792__auto___16532,func__2791__auto___16531,seq__16469_16525__$1,temp__5735__auto___16524,stack__2790__auto___16511))
;
return fexpr__16497(G__16498);
})();
var new_func__2794__auto___16534 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___16531,stack__2790__auto___16511),metadata__2793__auto___16533);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___16532,new_func__2794__auto___16534);


var G__16535 = cljs.core.next(seq__16469_16525__$1);
var G__16536 = null;
var G__16537 = (0);
var G__16538 = (0);
seq__16469_16512 = G__16535;
chunk__16471_16513 = G__16536;
count__16472_16514 = G__16537;
i__16473_16515 = G__16538;
continue;
}
} else {
}
}
break;
}

var G__16539 = seq__16459_16507;
var G__16540 = chunk__16466_16508;
var G__16541 = count__16467_16509;
var G__16542 = (i__16468_16510 + (1));
seq__16459_16507 = G__16539;
chunk__16466_16508 = G__16540;
count__16467_16509 = G__16541;
i__16468_16510 = G__16542;
continue;
} else {
var temp__5735__auto___16543 = cljs.core.seq(seq__16459_16507);
if(temp__5735__auto___16543){
var seq__16459_16544__$1 = temp__5735__auto___16543;
if(cljs.core.chunked_seq_QMARK_(seq__16459_16544__$1)){
var c__4550__auto___16545 = cljs.core.chunk_first(seq__16459_16544__$1);
var G__16546 = cljs.core.chunk_rest(seq__16459_16544__$1);
var G__16547 = c__4550__auto___16545;
var G__16548 = cljs.core.count(c__4550__auto___16545);
var G__16549 = (0);
seq__16459_16507 = G__16546;
chunk__16466_16508 = G__16547;
count__16467_16509 = G__16548;
i__16468_16510 = G__16549;
continue;
} else {
var stack__2790__auto___16550 = cljs.core.first(seq__16459_16544__$1);
var seq__16460_16551 = cljs.core.seq(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__16462_16552 = null;
var count__16463_16553 = (0);
var i__16464_16554 = (0);
while(true){
if((i__16464_16554 < count__16463_16553)){
var func__2791__auto___16555 = chunk__16462_16552.cljs$core$IIndexed$_nth$arity$2(null,i__16464_16554);
var instruction_name__2792__auto___16556 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___16550),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16555)))].join(''));
var metadata__2793__auto___16557 = (function (){var G__16504 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___16555),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___16550,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___16550)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16555))))));
var fexpr__16503 = ((function (seq__16460_16551,chunk__16462_16552,count__16463_16553,i__16464_16554,seq__16459_16507,chunk__16466_16508,count__16467_16509,i__16468_16510,G__16504,instruction_name__2792__auto___16556,func__2791__auto___16555,stack__2790__auto___16550,seq__16459_16544__$1,temp__5735__auto___16543){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__16460_16551,chunk__16462_16552,count__16463_16553,i__16464_16554,seq__16459_16507,chunk__16466_16508,count__16467_16509,i__16468_16510,G__16504,instruction_name__2792__auto___16556,func__2791__auto___16555,stack__2790__auto___16550,seq__16459_16544__$1,temp__5735__auto___16543))
;
return fexpr__16503(G__16504);
})();
var new_func__2794__auto___16558 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___16555,stack__2790__auto___16550),metadata__2793__auto___16557);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___16556,new_func__2794__auto___16558);


var G__16559 = seq__16460_16551;
var G__16560 = chunk__16462_16552;
var G__16561 = count__16463_16553;
var G__16562 = (i__16464_16554 + (1));
seq__16460_16551 = G__16559;
chunk__16462_16552 = G__16560;
count__16463_16553 = G__16561;
i__16464_16554 = G__16562;
continue;
} else {
var temp__5735__auto___16563__$1 = cljs.core.seq(seq__16460_16551);
if(temp__5735__auto___16563__$1){
var seq__16460_16564__$1 = temp__5735__auto___16563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16460_16564__$1)){
var c__4550__auto___16565 = cljs.core.chunk_first(seq__16460_16564__$1);
var G__16566 = cljs.core.chunk_rest(seq__16460_16564__$1);
var G__16567 = c__4550__auto___16565;
var G__16568 = cljs.core.count(c__4550__auto___16565);
var G__16569 = (0);
seq__16460_16551 = G__16566;
chunk__16462_16552 = G__16567;
count__16463_16553 = G__16568;
i__16464_16554 = G__16569;
continue;
} else {
var func__2791__auto___16570 = cljs.core.first(seq__16460_16564__$1);
var instruction_name__2792__auto___16571 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___16550),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16570)))].join(''));
var metadata__2793__auto___16572 = (function (){var G__16506 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___16570),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___16550,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___16550)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16570))))));
var fexpr__16505 = ((function (seq__16460_16551,chunk__16462_16552,count__16463_16553,i__16464_16554,seq__16459_16507,chunk__16466_16508,count__16467_16509,i__16468_16510,G__16506,instruction_name__2792__auto___16571,func__2791__auto___16570,seq__16460_16564__$1,temp__5735__auto___16563__$1,stack__2790__auto___16550,seq__16459_16544__$1,temp__5735__auto___16543){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__16460_16551,chunk__16462_16552,count__16463_16553,i__16464_16554,seq__16459_16507,chunk__16466_16508,count__16467_16509,i__16468_16510,G__16506,instruction_name__2792__auto___16571,func__2791__auto___16570,seq__16460_16564__$1,temp__5735__auto___16563__$1,stack__2790__auto___16550,seq__16459_16544__$1,temp__5735__auto___16543))
;
return fexpr__16505(G__16506);
})();
var new_func__2794__auto___16573 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___16570,stack__2790__auto___16550),metadata__2793__auto___16572);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___16571,new_func__2794__auto___16573);


var G__16574 = cljs.core.next(seq__16460_16564__$1);
var G__16575 = null;
var G__16576 = (0);
var G__16577 = (0);
seq__16460_16551 = G__16574;
chunk__16462_16552 = G__16575;
count__16463_16553 = G__16576;
i__16464_16554 = G__16577;
continue;
}
} else {
}
}
break;
}

var G__16578 = cljs.core.next(seq__16459_16544__$1);
var G__16579 = null;
var G__16580 = (0);
var G__16581 = (0);
seq__16459_16507 = G__16578;
chunk__16466_16508 = G__16579;
count__16467_16509 = G__16580;
i__16468_16510 = G__16581;
continue;
}
} else {
}
}
break;
}
