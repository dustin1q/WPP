/*
  THIS FILE WAS GENERATED BY 'ligand' USING 'mode.js'
*/

"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var HighlightRules = require("./partiql_highlight_rules").PartiqlHighlightRules;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
var CStyleFoldMode = require("./folding/cstyle").FoldMode;

var Mode = function () {
    this.HighlightRules = HighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = this.$defaultBehaviour;
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function () {

    this.lineCommentStart = "--";
    this.blockComment = {
        start: "/*",
        end: "*/",
        nestable: true
    };

    this.getNextLineIndent = function (state, line, tab) {
        var indent = this.$getIndent(line);

        if (state == "start") {
            var match = line.match(/^.*[\{\(\[]\s*$/);
            if (match) {
                indent += tab;
            }
        }

        return indent;
    };

    this.checkOutdent = function (state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function (state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.$id = "ace/mode/partiql";
}).call(Mode.prototype);

exports.Mode = Mode;
