$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Recherche/Recherche1.feature");
formatter.feature({
  "line": 1,
  "name": "Rehcerche  - Shein",
  "description": "ETQ utilisateur je souhaite d\u0027acheter un t-shirt Homme",
  "id": "rehcerche----shein",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2581089200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Recherche les t-shirt Home",
  "description": "",
  "id": "rehcerche----shein;recherche-les-t-shirt-home",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Rehcerche"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "je me connecte sur l\u0027application Shein",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "je saisie l\u0027acceptation le cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je passe Publication",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je remplir le champs de recherche par le mot  t-shirt",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je commence la recherche",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "je selection seulement le t-shirt de Homme",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "je enregiste les list dans un fichie Excel",
  "keyword": "Then "
});
formatter.match({
  "location": "SheinStepDef.je_me_connecte_sur_l_application_Shein()"
});
formatter.result({
  "duration": 4284259500,
  "status": "passed"
});
formatter.match({
  "location": "SheinStepDef.je_saisie_l_acceptation_le_cookies()"
});
formatter.result({
  "duration": 1654145100,
  "status": "passed"
});
formatter.match({
  "location": "SheinStepDef.je_passe_Publication()"
});
formatter.result({
  "duration": 261755200,
  "status": "passed"
});
formatter.match({
  "location": "SheinStepDef.je_remplir_le_champs_de_recherche_par_le_mot_t_shirt()"
});
formatter.result({
  "duration": 668326200,
  "status": "passed"
});
formatter.match({
  "location": "SheinStepDef.je_commence_la_recherche()"
});
formatter.result({
  "duration": 8814092000,
  "status": "passed"
});
formatter.match({
  "location": "SheinStepDef.je_selection_seulement_le_t_shirt_de_Homme()"
});
formatter.result({
  "duration": 4282648700,
  "status": "passed"
});
formatter.match({
  "location": "SheinStepDef.je_enregiste_les_list_dans_un_fichie_Excel()"
});
formatter.result({
  "duration": 205158200,
  "error_message": "java.lang.NoClassDefFoundError: org/apache/commons/compress/utils/InputStreamStatistics\r\n\tat org.apache.poi.openxml4j.util.ZipArchiveThresholdInputStream.\u003cinit\u003e(ZipArchiveThresholdInputStream.java:64)\r\n\tat org.apache.poi.openxml4j.opc.internal.ZipHelper.openZipStream(ZipHelper.java:178)\r\n\tat org.apache.poi.openxml4j.opc.ZipPackage.\u003cinit\u003e(ZipPackage.java:130)\r\n\tat org.apache.poi.openxml4j.opc.OPCPackage.open(OPCPackage.java:312)\r\n\tat org.apache.poi.ooxml.util.PackageHelper.open(PackageHelper.java:59)\r\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:289)\r\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:285)\r\n\tat com.e2eTests.automation.pageObjects.SheinPageObjects.excelMethode(SheinPageObjects.java:96)\r\n\tat com.e2eTests.automation.stepDefinitions.SheinStepDef.je_enregiste_les_list_dans_un_fichie_Excel(SheinStepDef.java:61)\r\n\tat ✽.Then je enregiste les list dans un fichie Excel(Recherche/Recherche1.feature:12)\r\nCaused by: java.lang.ClassNotFoundException: org.apache.commons.compress.utils.InputStreamStatistics\r\n\tat java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)\r\n\tat java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)\r\n\tat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:521)\r\n\tat org.apache.poi.openxml4j.util.ZipArchiveThresholdInputStream.\u003cinit\u003e(ZipArchiveThresholdInputStream.java:64)\r\n\tat org.apache.poi.openxml4j.opc.internal.ZipHelper.openZipStream(ZipHelper.java:178)\r\n\tat org.apache.poi.openxml4j.opc.ZipPackage.\u003cinit\u003e(ZipPackage.java:130)\r\n\tat org.apache.poi.openxml4j.opc.OPCPackage.open(OPCPackage.java:312)\r\n\tat org.apache.poi.ooxml.util.PackageHelper.open(PackageHelper.java:59)\r\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:289)\r\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:285)\r\n\tat com.e2eTests.automation.pageObjects.SheinPageObjects.excelMethode(SheinPageObjects.java:96)\r\n\tat com.e2eTests.automation.stepDefinitions.SheinStepDef.je_enregiste_les_list_dans_un_fichie_Excel(SheinStepDef.java:61)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.write("Current page URL is https://fr.shein.com/pdsearch/t-shirt/?ici\u003ds1`EditSearch`t-shirt`_fb`d0`PageHome\u0026search_source\u003d1\u0026search_type\u003dall\u0026src_identifier\u003dst%3D2%60sc%3Dt-shirt%60sr%3D0%60ps%3D1\u0026src_module\u003dsearch\u0026src_tab_page_id\u003dpage_home1697148191601");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1899869500,
  "status": "passed"
});
});