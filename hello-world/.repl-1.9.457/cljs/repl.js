// Compiled by ClojureScript 1.9.457 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__5626){
var map__5651 = p__5626;
var map__5651__$1 = ((((!((map__5651 == null)))?((((map__5651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5651):map__5651);
var m = map__5651__$1;
var n = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5653_5675 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5654_5676 = null;
var count__5655_5677 = (0);
var i__5656_5678 = (0);
while(true){
if((i__5656_5678 < count__5655_5677)){
var f_5679 = cljs.core._nth.call(null,chunk__5654_5676,i__5656_5678);
cljs.core.println.call(null,"  ",f_5679);

var G__5680 = seq__5653_5675;
var G__5681 = chunk__5654_5676;
var G__5682 = count__5655_5677;
var G__5683 = (i__5656_5678 + (1));
seq__5653_5675 = G__5680;
chunk__5654_5676 = G__5681;
count__5655_5677 = G__5682;
i__5656_5678 = G__5683;
continue;
} else {
var temp__4657__auto___5684 = cljs.core.seq.call(null,seq__5653_5675);
if(temp__4657__auto___5684){
var seq__5653_5685__$1 = temp__4657__auto___5684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5653_5685__$1)){
var c__3828__auto___5686 = cljs.core.chunk_first.call(null,seq__5653_5685__$1);
var G__5687 = cljs.core.chunk_rest.call(null,seq__5653_5685__$1);
var G__5688 = c__3828__auto___5686;
var G__5689 = cljs.core.count.call(null,c__3828__auto___5686);
var G__5690 = (0);
seq__5653_5675 = G__5687;
chunk__5654_5676 = G__5688;
count__5655_5677 = G__5689;
i__5656_5678 = G__5690;
continue;
} else {
var f_5691 = cljs.core.first.call(null,seq__5653_5685__$1);
cljs.core.println.call(null,"  ",f_5691);

var G__5692 = cljs.core.next.call(null,seq__5653_5685__$1);
var G__5693 = null;
var G__5694 = (0);
var G__5695 = (0);
seq__5653_5675 = G__5692;
chunk__5654_5676 = G__5693;
count__5655_5677 = G__5694;
i__5656_5678 = G__5695;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5696 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3441__auto__)){
return or__3441__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_5696);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_5696)))?cljs.core.second.call(null,arglists_5696):arglists_5696));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5657_5697 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5658_5698 = null;
var count__5659_5699 = (0);
var i__5660_5700 = (0);
while(true){
if((i__5660_5700 < count__5659_5699)){
var vec__5661_5701 = cljs.core._nth.call(null,chunk__5658_5698,i__5660_5700);
var name_5702 = cljs.core.nth.call(null,vec__5661_5701,(0),null);
var map__5664_5703 = cljs.core.nth.call(null,vec__5661_5701,(1),null);
var map__5664_5704__$1 = ((((!((map__5664_5703 == null)))?((((map__5664_5703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5664_5703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5664_5703):map__5664_5703);
var doc_5705 = cljs.core.get.call(null,map__5664_5704__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5706 = cljs.core.get.call(null,map__5664_5704__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5702);

cljs.core.println.call(null," ",arglists_5706);

if(cljs.core.truth_(doc_5705)){
cljs.core.println.call(null," ",doc_5705);
} else {
}

var G__5707 = seq__5657_5697;
var G__5708 = chunk__5658_5698;
var G__5709 = count__5659_5699;
var G__5710 = (i__5660_5700 + (1));
seq__5657_5697 = G__5707;
chunk__5658_5698 = G__5708;
count__5659_5699 = G__5709;
i__5660_5700 = G__5710;
continue;
} else {
var temp__4657__auto___5711 = cljs.core.seq.call(null,seq__5657_5697);
if(temp__4657__auto___5711){
var seq__5657_5712__$1 = temp__4657__auto___5711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5657_5712__$1)){
var c__3828__auto___5713 = cljs.core.chunk_first.call(null,seq__5657_5712__$1);
var G__5714 = cljs.core.chunk_rest.call(null,seq__5657_5712__$1);
var G__5715 = c__3828__auto___5713;
var G__5716 = cljs.core.count.call(null,c__3828__auto___5713);
var G__5717 = (0);
seq__5657_5697 = G__5714;
chunk__5658_5698 = G__5715;
count__5659_5699 = G__5716;
i__5660_5700 = G__5717;
continue;
} else {
var vec__5666_5718 = cljs.core.first.call(null,seq__5657_5712__$1);
var name_5719 = cljs.core.nth.call(null,vec__5666_5718,(0),null);
var map__5669_5720 = cljs.core.nth.call(null,vec__5666_5718,(1),null);
var map__5669_5721__$1 = ((((!((map__5669_5720 == null)))?((((map__5669_5720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5669_5720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5669_5720):map__5669_5720);
var doc_5722 = cljs.core.get.call(null,map__5669_5721__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5723 = cljs.core.get.call(null,map__5669_5721__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5719);

cljs.core.println.call(null," ",arglists_5723);

if(cljs.core.truth_(doc_5722)){
cljs.core.println.call(null," ",doc_5722);
} else {
}

var G__5724 = cljs.core.next.call(null,seq__5657_5712__$1);
var G__5725 = null;
var G__5726 = (0);
var G__5727 = (0);
seq__5657_5697 = G__5724;
chunk__5658_5698 = G__5725;
count__5659_5699 = G__5726;
i__5660_5700 = G__5727;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__5671 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__5672 = null;
var count__5673 = (0);
var i__5674 = (0);
while(true){
if((i__5674 < count__5673)){
var role = cljs.core._nth.call(null,chunk__5672,i__5674);
var temp__4657__auto___5728__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___5728__$1)){
var spec_5729 = temp__4657__auto___5728__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_5729));
} else {
}

var G__5730 = seq__5671;
var G__5731 = chunk__5672;
var G__5732 = count__5673;
var G__5733 = (i__5674 + (1));
seq__5671 = G__5730;
chunk__5672 = G__5731;
count__5673 = G__5732;
i__5674 = G__5733;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__5671);
if(temp__4657__auto____$1){
var seq__5671__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5671__$1)){
var c__3828__auto__ = cljs.core.chunk_first.call(null,seq__5671__$1);
var G__5734 = cljs.core.chunk_rest.call(null,seq__5671__$1);
var G__5735 = c__3828__auto__;
var G__5736 = cljs.core.count.call(null,c__3828__auto__);
var G__5737 = (0);
seq__5671 = G__5734;
chunk__5672 = G__5735;
count__5673 = G__5736;
i__5674 = G__5737;
continue;
} else {
var role = cljs.core.first.call(null,seq__5671__$1);
var temp__4657__auto___5738__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___5738__$2)){
var spec_5739 = temp__4657__auto___5738__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_5739));
} else {
}

var G__5740 = cljs.core.next.call(null,seq__5671__$1);
var G__5741 = null;
var G__5742 = (0);
var G__5743 = (0);
seq__5671 = G__5740;
chunk__5672 = G__5741;
count__5673 = G__5742;
i__5674 = G__5743;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
