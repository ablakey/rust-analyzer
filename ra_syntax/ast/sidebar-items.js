initSidebarItems({"enum":[["ArrayExprKind",""],["AttrInput",""],["AttrKind",""],["BinOp",""],["CommentPlacement",""],["CommentShape",""],["ElseBranch",""],["Expr",""],["FieldKind",""],["ImplItem",""],["ItemOrMacro",""],["LiteralKind",""],["ModuleItem",""],["NominalDef",""],["Pat",""],["PathSegmentKind",""],["PrefixOp",""],["RangeOp",""],["SelfParamKind",""],["Stmt",""],["StructKind",""],["TypeBoundKind",""],["TypeRef",""],["VisibilityKind",""]],"mod":[["edit","This module contains functions for editing syntax trees. As the trees are immutable, all function here return a fresh copy of the tree, instead of doing an in-place modification."],["make","This module contains free-standing functions for creating AST fragments out of smaller pieces."]],"struct":[["Alias",""],["ArgList",""],["ArrayExpr",""],["ArrayType",""],["AssocTypeArg",""],["AstChildren","An iterator over `SyntaxNode` children of a particular AST type."],["Attr",""],["AwaitExpr",""],["BinExpr",""],["BindPat",""],["Block",""],["BlockExpr",""],["BoxExpr",""],["BoxPat",""],["BreakExpr",""],["CallExpr",""],["CastExpr",""],["Comment",""],["CommentIter",""],["CommentKind",""],["Condition",""],["ConstArg",""],["ConstDef",""],["ConstParam",""],["ContinueExpr",""],["DotDotPat",""],["DynTraitType",""],["EnumDef",""],["EnumVariant",""],["EnumVariantList",""],["ExprStmt",""],["ExternCrateItem",""],["FieldExpr",""],["FnDef",""],["FnPointerType",""],["ForExpr",""],["ForType",""],["IfExpr",""],["ImplBlock",""],["ImplTraitType",""],["IndexExpr",""],["ItemList",""],["ItemOrMacroIter",""],["Label",""],["LambdaExpr",""],["LetStmt",""],["LifetimeArg",""],["LifetimeParam",""],["Literal",""],["LiteralPat",""],["LoopExpr",""],["MacroCall",""],["MacroItems",""],["MacroStmts",""],["MatchArm",""],["MatchArmList",""],["MatchExpr",""],["MatchGuard",""],["MethodCallExpr",""],["Module",""],["Name",""],["NameRef",""],["NeverType",""],["OrPat",""],["Param",""],["ParamList",""],["ParenExpr",""],["ParenPat",""],["ParenType",""],["Path",""],["PathExpr",""],["PathPat",""],["PathSegment",""],["PathType",""],["PlaceholderPat",""],["PlaceholderType",""],["PointerType",""],["PrefixExpr",""],["RangeExpr",""],["RangePat",""],["RawString",""],["RecordField",""],["RecordFieldDef",""],["RecordFieldDefList",""],["RecordFieldList",""],["RecordFieldPat",""],["RecordFieldPatList",""],["RecordLit",""],["RecordPat",""],["RefExpr",""],["RefPat",""],["ReferenceType",""],["RetType",""],["ReturnExpr",""],["SelfParam",""],["SlicePat",""],["SlicePatComponents",""],["SliceType",""],["SourceFile",""],["StaticDef",""],["String",""],["StructDef",""],["TokenTree",""],["TraitDef",""],["TryBlockExpr",""],["TryExpr",""],["TupleExpr",""],["TupleFieldDef",""],["TupleFieldDefList",""],["TuplePat",""],["TupleStructPat",""],["TupleType",""],["TypeAliasDef",""],["TypeArg",""],["TypeArgList",""],["TypeBound",""],["TypeBoundList",""],["TypeParam",""],["TypeParamList",""],["UnionDef",""],["UseItem",""],["UseTree",""],["UseTreeList",""],["Visibility",""],["WhereClause",""],["WherePred",""],["WhileExpr",""],["Whitespace",""]],"trait":[["ArgListOwner",""],["AstNode","The main trait to go from untyped `SyntaxNode`  to a typed ast. The conversion itself has zero runtime cost: ast and syntax nodes have exactly the same representation: a pointer to the tree root and a pointer to the node itself."],["AstToken","Like `AstNode`, but wraps tokens rather than interior nodes."],["AttrsOwner",""],["DocCommentsOwner",""],["FnDefOwner",""],["LoopBodyOwner",""],["ModuleItemOwner",""],["NameOwner",""],["TypeAscriptionOwner",""],["TypeBoundsOwner",""],["TypeParamsOwner",""],["VisibilityOwner",""]]});