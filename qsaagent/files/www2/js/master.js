var tempString = [ {
	"id" : 1,
	"name" : "Github_SignIn",
	"activityUrl" : "http://github.com",
	"activityName" : "sign in",
	"screenShot" : "sfsdfsdagfdsgfdsgfdsgfds",
	"projectId" : 1,
	"actionflag" : 1,
	"objectRepository" : [ {
		"id" : 1,
		"objectFunctionalGroupId" : 1,
		"projectId" : 1,
		"tagName" : "a",
		"baseUrl" : "b",
		"clientId" : "c",
		"clientName" : "d",
		"innerHtml" : "e",
		"cssClass" : "f",
		"clientType" : "g",
		"clientRole" : "h",
		"clientSrc" : "i",
		"clientHref" : "j",
		"clientAlt" : "k",
		"clientValue" : "l",
		"clientFor" : "m",
		"clientPlaceHolder" : "n",
		"formAction" : "o",
		"formMethod" : "p",
		"clientHeight" : 1,
		"clientWidth" : 2,
		"clientTop" : 3,
		"clientLeft" : 4,
		"isVisible" : 1,
		"isSelected" : 1,
		"isEnabled" : 1,
		"identifier" : "q",
		"xpath" : "xpath1",
		"displayName" : "display_name_1",
		"parentId" : 1,
		"missing" : 0,
		"actionFlag" : 1,
		"childObjectList" : []
	}, {
		"id" : 1,
		"objectFunctionalGroupId" : 1,
		"projectId" : 1,
		"tagName" : "aa",
		"baseUrl" : "bb",
		"clientId" : "cc",
		"clientName" : "dd",
		"innerHtml" : "ee",
		"cssClass" : "ff",
		"clientType" : "gg",
		"clientRole" : "hh",
		"clientSrc" : "ii",
		"clientHref" : "jj",
		"clientAlt" : "kk",
		"clientValue" : "ll",
		"clientFor" : "mm",
		"clientPlaceHolder" : "nn",
		"formAction" : "oo",
		"formMethod" : "pp",
		"clientHeight" : 1,
		"clientWidth" : 2,
		"clientTop" : 3,
		"clientLeft" : 4,
		"isVisible" : 1,
		"isSelected" : 1,
		"isEnabled" : 1,
		"identifier" : "qq",
		"xpath" : "xpath2",
		"displayName" : "display_name_2",
		"parentId" : 1,
		"missing" : 1,
		"actionFlag" : 1,
		"childObjectList" : []
	} ]
}, {
	"id" : 1,
	"name" : "github_Home",
	"activityUrl" : "http://github.com",
	"activityName" : "Home Form",
	"screenShot" : "sfsdfsdagfdsgfdsgfdsgfds",
	"projectId" : 1,
	"actionflag" : 0,
	"objectRepository" : [ {
		"id" : 1,
		"objectFunctionalGroupId" : 1,
		"projectId" : 1,
		"tagName" : "a",
		"baseUrl" : "b",
		"clientId" : "c",
		"clientName" : "d",
		"innerHtml" : "e",
		"cssClass" : "f",
		"clientType" : "g",
		"clientRole" : "h",
		"clientSrc" : "i",
		"clientHref" : "j",
		"clientAlt" : "k",
		"clientValue" : "l",
		"clientFor" : "m",
		"clientPlaceHolder" : "n",
		"formAction" : "o",
		"formMethod" : "p",
		"clientHeight" : 1,
		"clientWidth" : 2,
		"clientTop" : 3,
		"clientLeft" : 4,
		"isVisible" : 1,
		"isSelected" : 1,
		"isEnabled" : 1,
		"identifier" : "q",
		"xpath" : "xpath3",
		"displayName" : "display_name_3",
		"parentId" : 1,
		"missing" : 1,
		"actionFlag" : 1,
		"childObjectList" : []
	}, {
		"id" : 1,
		"objectFunctionalGroupId" : 1,
		"projectId" : 1,
		"tagName" : "aa",
		"baseUrl" : "bb",
		"clientId" : "cc",
		"clientName" : "dd",
		"innerHtml" : "ee",
		"cssClass" : "ff",
		"clientType" : "gg",
		"clientRole" : "hh",
		"clientSrc" : "ii",
		"clientHref" : "jj",
		"clientAlt" : "kk",
		"clientValue" : "ll",
		"clientFor" : "mm",
		"clientPlaceHolder" : "nn",
		"formAction" : "oo",
		"formMethod" : "pp",
		"clientHeight" : 1,
		"clientWidth" : 2,
		"clientTop" : 3,
		"clientLeft" : 4,
		"isVisible" : 1,
		"isSelected" : 1,
		"isEnabled" : 1,
		"identifier" : "qq",
		"xpath" : "xpath4",
		"displayName" : "display_name_4",
		"parentId" : 1,
		"missing" : 1,
		"actionFlag" : 1,
		"childObjectList" : []
	} ]
} ];
tempEle = {
	"id" : 1,
	"objectFunctionalGroupId" : 1,
	"projectId" : 1,
	"tagName" : "a",
	"baseUrl" : "b",
	"clientId" : "c",
	"clientName" : "d",
	"innerHtml" : "e",
	"cssClass" : "f",
	"clientType" : "g",
	"clientRole" : "h",
	"clientSrc" : "i",
	"clientHref" : "j",
	"clientAlt" : "k",
	"clientValue" : "l",
	"clientFor" : "m",
	"clientPlaceHolder" : "n",
	"formAction" : "o",
	"formMethod" : "p",
	"clientHeight" : 1,
	"clientWidth" : 2,
	"clientTop" : 3,
	"clientLeft" : 4,
	"isVisible" : 1,
	"isSelected" : 1,
	"isEnabled" : 1,
	"identifier" : "q",
	"xpath" : "r",
	"displayName" : "display_name_5;",
	"parentId" : 1,
	"missing" : 1,
	"actionFlag" : 1,
	"childObjectList" : []
};

// central repo class
var CentralRepo = new function() {
	var me = this;
	me.mainFunctionGrpList = tempString;
	me.initRepo = function(fnGrpJson) {
		me.mainFunctionGrpList = JSON.parse(fnGrpJson);
		$('.fade').css("display", "block");
	};
};

// current page repo class
var CurrentPageRepo = new function() {
	var me = this;
	me.currentFunctionGrpList = []; // = CentralRepo.mainFunctionGrpList;
	me.pageURL = null;
	me.projectID = 0;
	me.elementsXpath = [];
	me.initCurrRepo = function(baseURL, projectID) {

		me.currentFunctionGrpList = [];
		me.pageURL = baseURL;
		me.projectID = projectID;
		for (var i = 0; i < CentralRepo.mainFunctionGrpList.length; i++) {
			if (CentralRepo.mainFunctionGrpList[i]["activityUrl"] == me.pageURL) {
				me.currentFunctionGrpList
						.push(CentralRepo.mainFunctionGrpList[i]);
			}
		}

		me.fillObjRepoPanel();
	};

	me.fillObjRepoPanel = function() {
		var repoListGroup = "FunctionalGroup1";
		var repoListStatus = "available";
		var groups = [];
		var activityUrls = [];
		var groupCounter = 0;
		var xpathCounter = 0;
		me.elementsXpath.length = 0;

		
		
		$('.repoList').find('tr').remove();
		var repoListNo = $('.repoList').children('tr').length;
		$('.fnGrpDropDown').find('option').remove();
		for (var repoListIterator = 0; repoListIterator < me.currentFunctionGrpList.length; repoListIterator++) {
			var uiElement = me.currentFunctionGrpList[repoListIterator];
			if (uiElement["actionflag"] != 3) {
				repoListGroup = uiElement["name"];
				groups[groupCounter] = repoListGroup;
				activityUrls[groupCounter] = uiElement["activityUrl"];
				groupCounter++;
				grpOption = '<option value="' + repoListGroup + '">'
						+ repoListGroup + '</option>';
				$('.fnGrpDropDown').append(grpOption);
				var elementsInfo = uiElement["objectRepository"];
				for (var elementInfoIterator = 0; elementInfoIterator < elementsInfo.length; elementInfoIterator++) {
					var elementObj = elementsInfo[elementInfoIterator];
					if (elementObj["actionFlag"] != 3) {
						var elementObj = elementsInfo[elementInfoIterator];
						if (elementObj["missing"] == 1) {
							repoListStatus = "Available";
						} else {
							repoListStatus = "NotAvailable";
						}
						me.elementsXpath[xpathCounter] = elementObj["xpath"];
						xpathCounter++;
						var repoListRow = '<tr class=""><td>'
								+ (++repoListNo)
								+ '</td><td>'
								+ elementObj["displayName"]
								+ '</td><td>'
								+ repoListGroup
								+ '</td><td>'
								+ elementObj["tagName"]
								+ '</td><td style="display:none;">'
								+ elementObj["xpath"]
								+ '</td><td>'
								+ elementObj["cssClass"]
								+ '</td><td>'
								+ repoListStatus
								+ '</td><td><a href="#"> <img src=" images/pencil-square-o.png"  class=\'editElementFromList\' title="Edit object details."></a>'
								+ '<a href="#"><img src="images/close_black_16.png" class=\'deleteElementFromList\' title="Delete object."></a></td></tr>';
						$('.repoList').append(repoListRow);
					}
				}
			}
		}
		fillGroupsPanel(groups, activityUrls);
			
		//console.log('page load Size ' + CurrentPageRepo.elementsXpath.length);
		if (CurrentPageRepo.elementsXpath.length > 0) {
			if ($('.highlightElements').is(":checked")) {
				objR.highlightElements(JSON.stringify(CurrentPageRepo.elementsXpath), true);
			}
			else
				{
				objR.highlightElements(JSON.stringify(CurrentPageRepo.elementsXpath), false);
				}
		}
		$('.fade').css("display", "none");
		$('.createProjectContainer').css("display", "none");
		
		if($('.fnGrpDropDown option').size()==0)
		{
			$('.fnGrpname').val('');
			$('.fnGrpURL').val(CurrentPageRepo.pageURL);
			$('.fade').css("display", "block");
			$('.createProjectContainer').css("display", "block");
		}
	
	};

	fillGroupsPanel = function(groups, activityUrls) {
		console.log("Fill groups panel...");
		$('.repoGroupList').find('tr').remove();
		var groupListNo = $('.repoGroupList').children('tr').length;
		var groupsLength = groups.length;
		for (var groupsIterator = 0; groupsIterator < groupsLength; groupsIterator++) {
			var groupListRow = '<tr class=""><td>'
					+ (++groupListNo)
					+ '</td><td>'
					+ groups[groupsIterator]
					+ '</td><td>'
					+ activityUrls[groupsIterator]
					+ '</td>'
					+ '</td><td><a href="#"> <img src=" images/pencil-square-o.png"  class=\'editFunctionGroup\' title="Edit group details."></a>'
					+ '<a href="#"><img src="images/close_black_16.png" class=\'delete_group_button\' title="Delete group. "></a></td></tr>';
			$('.repoGroupList').append(groupListRow);
		}
	};

	me.saveEditGroupResult = function(oldFnGrpname, newFnGrpname, oldFnGrpURL,
			newFnGrpURL) {
		console.log("Save edit group result..");
		for (var repoListIterator = 0; repoListIterator < me.currentFunctionGrpList.length; repoListIterator++) {
			var uiElement = me.currentFunctionGrpList[repoListIterator];
			if (uiElement["name"] == oldFnGrpname
					&& uiElement["activityUrl"] == oldFnGrpURL) {
				uiElement["name"] = newFnGrpname;
				uiElement["activityUrl"] = newFnGrpURL;
				uiElement["screenShot"] = objR.getScreenshotString();
				if (uiElement["actionflag"] == 0) {
					uiElement["actionflag"] = 2;
					break;
				}
			}
		}
	};

	me.deleteGroupResult = function(fnGrpname, fnGrpUrl) {
		console.log("Delete group result..");
		for (var repoListIterator = 0; repoListIterator < me.currentFunctionGrpList.length; repoListIterator++) {
			var uiElement = me.currentFunctionGrpList[repoListIterator];
			if (uiElement["name"] == fnGrpname
					&& uiElement["activityUrl"] == fnGrpUrl) {
				if (uiElement["actionflag"] == 1) {
					me.currentFunctionGrpList.splice(repoListIterator, 1);
				} else {
					uiElement["actionflag"] = 3;
					var elementsInfo = uiElement["objectRepository"];
					for (var elementsInfoIterator = 0; elementsInfoIterator < elementsInfo.length; elementsInfoIterator++) {
						var elementInfo = elementsInfo[elementsInfoIterator];
						elementInfo["actionFlag"] = 3;
						var childsInfo = elementInfo["childObjectList"];
						for (var childsInfoIterator = 0; childsInfoIterator < childsInfo.length; childsInfoIterator++) {
							childsInfo[childsInfoIterator]["actionFlag"] = 3;
						}
					}
				}
				break;
			}
		}
	};

	me.checkGrpnamePresent = function(newFnGrpname) {
		console.log("Group name availability check..");
		for (var repoListIterator = 0; repoListIterator < me.currentFunctionGrpList.length; repoListIterator++) {
			var uiElement = me.currentFunctionGrpList[repoListIterator];
			if (uiElement["name"] == newFnGrpname) {
				return true;
			}
		}
		return false;
	};

	me.findElementInList = function(groupName, xpath, action,displayName) {
		console.log("Group name : " + groupName + " xpath : " + xpath);
		$('.fnGrpDropDown').val(groupName);
		for (var repoListIterator = 0; repoListIterator < me.currentFunctionGrpList.length; repoListIterator++) {
			var uiElement = me.currentFunctionGrpList[repoListIterator];
			var repoListGroup = uiElement["name"];
			if (repoListGroup == groupName) {
				var elementsInfo = uiElement["objectRepository"];
				for (var elementInfoIterator = 0; elementInfoIterator < elementsInfo.length; elementInfoIterator++) {
					var elementObj = elementsInfo[elementInfoIterator];
					var objXpath = elementObj["xpath"];
					var objDisplayName=elementObj["displayName"];
					if (objXpath == xpath && objDisplayName==displayName) {
						console.log(elementObj);
						if (action == "delete") {
							if (me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["actionFlag"] == 2
									|| me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["actionFlag"] == 0) {
								me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["actionFlag"] = 3;
								

								if (me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["isChildPresent"] == 1) {
									console
											.log('Child element Found '
													+ me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["childObjectList"].length);
									for (var i = 0; i < me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["childObjectList"].length; i++) {
										me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["childObjectList"][i]["actionFlag"] = 3;
										console.log('Child element deleted '
												+ i);
									}
								}
							} else if (me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["actionFlag"] = 1) {
								me.currentFunctionGrpList[repoListIterator]["objectRepository"]
										.splice(elementInfoIterator, 1);
							}
							me.clearPreviewPanel(elementObj, groupName);
							CurrentPageRepo.fillObjRepoPanel();
						} else {
							PreviewElement
									.fillPreviewPanel(
											elementObj,
											action,
											me.currentFunctionGrpList[repoListIterator]["activityUrl"]);
						}
					}
				}
			}
		}
	};

	me.clearPreviewPanel = function(elementObj, groupName) {
		console.log("Clear preview panel obj : " + elementObj);
		if (groupName == $('.fnGrpDropDown').val()) {
			if (elementObj["displayName"] == $('.objDisplayName').val()) {
				$('.fnGrpDropDown').val("");
				$('.objDisplayName').val("");
				$('.eleTagName').text("");
				$('.eleAttributeValue').text("");
				$('.eleAttributeName').text('Attribute');
				$('#hiddenXpath').val("");
				$('#objNameSave').text('Save');
			}
		}
	};

	me.addAndUpdateRepoList = function(action) {
		console.log("Update Repo list action : " + action);
		if (action == "Update") {
			var selectedEleXpath = $('#hiddenXpath').val();
			var selectedEleGroup = $('#hiddenFnGroup').val();
			var selectedEleDisplayName= $('#hiddenDisplayName').val();
			var elementObj = {};
			var loopTerminate = false;
			for (var repoListIterator = 0; repoListIterator < me.currentFunctionGrpList.length; repoListIterator++) {
				var uiElement = me.currentFunctionGrpList[repoListIterator]["objectRepository"];
				for (var elementInfoIterator = 0; elementInfoIterator < uiElement.length; elementInfoIterator++) {
					if (me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["xpath"] == selectedEleXpath && me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["displayName"] == selectedEleDisplayName ) {
						if (selectedEleGroup != $('.fnGrpDropDown').val()) {
							elementObj = me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator];
							me.currentFunctionGrpList[repoListIterator]["objectRepository"]
									.splice(elementInfoIterator, 1);
							if (elementObj["actionFlag"] == 0) {
								elementObj["actionFlag"] == 2;
							}
							elementObj["displayName"] = $('.objDisplayName')
									.val();
							me.pushObjectInObjRepo(elementObj);
							me.clearPreviewPanel(elementObj,
									$('.fnGrpDropDown').val());
							loopTerminate = true;
							break;
						} else {
							me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["displayName"] = $(
									'.objDisplayName').val();
							if (me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["actionFlag"] == 0) {
								me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator]["actionFlag"] = 2;
							}
							CurrentPageRepo.fillObjRepoPanel();
							me
									.clearPreviewPanel(
											me.currentFunctionGrpList[repoListIterator]["objectRepository"][elementInfoIterator],
											$('.fnGrpDropDown').val());
							loopTerminate = true;
						}
					}
				}
				if (loopTerminate) {
					break;
				}
			}
		} else if (action == "Save") {
			console.log("Save action received.");
			PreviewElement.saveElementObject();
		}
	};

	me.pushObjectInObjRepo = function(elementObj) {
		for (var repoListIterator = 0; repoListIterator < me.currentFunctionGrpList.length; repoListIterator++) {
			if (me.currentFunctionGrpList[repoListIterator]["name"] == $(
					'.fnGrpDropDown').val()) {
				me.currentFunctionGrpList[repoListIterator]["objectRepository"]
						.push(elementObj);
				CurrentPageRepo.fillObjRepoPanel();
			}
		}
	};

};

// current element class
var PreviewElement = new function() {
	var me = this;
	me.selectedElement = tempEle;
	me.elementObj = null;
	me.operation = null;

	me.initSelectedElement = function(selectedElJson, viewMode) {
		if (viewMode == 'new') {
			me.selectedElement = JSON.parse(selectedElJson);
			me.fillPreviewPanel(me.selectedElement);
			me.elementObj = null;
		} else if (viewMode == 'edit') {
			me.elementObj = selectedElJson;
			me.fillPreviewPanel(me.elementObj);
		}
		me.operation = viewMode;
	};

	me.fillPreviewPanel = function(elementObj, viewMode, activityUrl) {
		if (viewMode == 'new') {
			$('#objNameSave').text('Save');
			$('.objDisplayName').val(elementObj["clientId"]);
		} else if (viewMode == 'edit') {
			$('#objNameSave').text('Update');
			$('.objDisplayName').val(elementObj["displayName"]);
		}

		// fill the rest of data here

		$('.eleTagName').text(elementObj["tagName"]);
		$('#hiddenXpath').val(elementObj["xpath"]);
		$('#hiddenDisplayName').val(elementObj["displayName"]);
		$('#hiddenFnGroup').val($('.fnGrpDropDown').val());
		$('#hiddenFnActivityUrl').val(activityUrl);

		switch (elementObj["tagName"]) {
		case 'input':
			$('.eleAttributeName').text('Type');
			$('.eleAttributeValue').text(elementObj["clientType"]);
			break;
		case 'a':
			$('.eleAttributeName').text('Location ');
			$('.eleAttributeValue').text(elementObj["clientHref"]);
			break;
		case 'img':
			$('.eleAttributeName').text('Alt');
			$('.eleAttributeValue').text(elementObj["clientAlt"]);
			break;
		case 'h1':
			$('.eleAttributeName').text('Html');
			$('.eleAttributeValue').text(elementObj["innerHtml"]);
			break;
		default:
			$('.eleAttributeName').text('Location');
			$('.eleAttributeValue').text(
					'X1: ' + elementObj["clientLeft"] + ' Y1: '
							+ elementObj["clientTop"]);
		}

	};

	me.saveElementObject = function() {
		var currentSelectedFnGroup = $('.fnGrpDropDown').val();
		
		if ($('.objDisplayName').val().trim() != ""
				&& me.selectedElement != null) {
			for (var repoListIterator = 0; repoListIterator < CurrentPageRepo.currentFunctionGrpList.length; repoListIterator++) {

				if (CurrentPageRepo.currentFunctionGrpList[repoListIterator]["name"] == currentSelectedFnGroup) {
					me.selectedElement["displayName"] = $('.objDisplayName')
							.val();
					me.selectedElement["actionFlag"] = 1;
					CurrentPageRepo.currentFunctionGrpList[repoListIterator]["objectRepository"]
							.splice(0, 0, me.selectedElement);
					// CurrentPageRepo.currentFunctionGrpList[repoListIterator]["objectRepository"]
					// .push(me.selectedElement);
				}
			}
		} else {
			// alert("Please select element and enter valid object name.");
			$('.createPopUpContainer').css('display', 'block');
			$('.popUpmsg').text(
					'Please select element and enter valid object name.');
			console.log("Please select element and enter valid object name.");
		}
		CurrentPageRepo.fillObjRepoPanel();
		$('.objDisplayName').val('');
	};

	me.addFunctionGroup = function(fnName, fnURL) {

		var screenshot = objR.getScreenshotString();
		console.log(screenshot);
		var newFnGrp = {
			"id" : 0,
			"name" : fnName,
			"activityUrl" : fnURL,
			"activityName" : "",
			"screenShot" : screenshot,
			"projectId" : CurrentPageRepo.projectID,
			"actionflag" : 1,
			"objectRepository" : []
		};

		console.log('Adding new function group' + newFnGrp);
		CentralRepo.mainFunctionGrpList.push(newFnGrp);
		CurrentPageRepo.initCurrRepo(CurrentPageRepo.pageURL,
				CurrentPageRepo.projectID);

		$('.fade').css("display", "none");
		$('.createProjectContainer').css("display", "none");
	};

	// --loc--
};

// onclick event registery here
$(".newFunGroup").click(function() {
	$('.fnGrpname').val('');
	$('.fnGrpURL').val(CurrentPageRepo.pageURL);
	$('.fade').css("display", "block");
	$('.createProjectContainer').css("display", "block");
	// CurrentPageRepo.initCurrRepo("http://github.com", 7);
});

$(document).on('click', ".editFunctionGroup", function() {
	$('.editFnGrpname').val($(this).closest('tr').find('td:eq(1)').text());
	$('.editOldFnGrpURL').val($(this).closest('tr').find('td:eq(2)').text());
	$('.editNewFnGrpURL').val(CurrentPageRepo.pageURL);
	$('.editOldFnGrpname').val($(this).closest('tr').find('td:eq(1)').text());
	$('.fade').css("display", "block");
	$('.editGroupContainer').css("display", "block");
});

$("#objNameSave").click(function() {
	CurrentPageRepo.addAndUpdateRepoList($(this).text());
});

$(".saveFinalRepo")
		.click(
				function() {
					var uploadedResult = objR.uploadResultToServer(JSON
							.stringify(CentralRepo.mainFunctionGrpList));
					if (uploadedResult == true) {
						console.log("Object repository updated Sucessfully");
						// alert("Object repository updated Sucessfully!!");
						$('.createPopUpContainer').css('display', 'block');
						$('.popUpmsg').text(
								'Object repository updated successfully!!');
					} else {
						console.log("Object repository failed");
						// alert("Error occured while Object repository updating
						// ");
						$('.createPopUpContainer').css('display', 'block');
						$('.popUpmsg')
								.text(
										'Error occured while object repository updating.');
					}
				});

$(".highlightElements").click(
		function() {
			//var btmName = $("#highlightButton").text();
			//console.log('btmName ' + btmName);
			console.log('Size ' + CurrentPageRepo.elementsXpath.length);
			if (CurrentPageRepo.elementsXpath.length > 0) {
				if ($('.highlightElements').is(":checked")) {
					objR.highlightElements(JSON.stringify(CurrentPageRepo.elementsXpath), true);
				}
				else
					{
					objR.highlightElements(JSON.stringify(CurrentPageRepo.elementsXpath), false);
					}
			}
		});

$(".removeHighlights").click(
		function() {
			var btmName = $("#removeHighlightButton").text();
			console.log('btmName ' + btmName);
			console.log('Size ' + CurrentPageRepo.elementsXpath.length);
			if (CurrentPageRepo.elementsXpath.length > 0) {
				if (btmName == 'Remove Highlights') {
					objR.highlightElements(JSON.stringify(CurrentPageRepo.elementsXpath), false);
				}
			}
		});

$(document).on(
		'click',
		".editElementFromList",
		function() {
			CurrentPageRepo.findElementInList($(this).closest('tr').find(
					'td:eq(2)').text(), $(this).closest('tr').find('td:eq(4)')
					.text(), "edit",$(this).closest('tr').find('td:eq(1)')
					.text());
		});

$(document).on(
		'click',
		".deleteElementFromList",
		function() {
			CurrentPageRepo.findElementInList($(this).closest('tr').find(
					'td:eq(2)').text(), $(this).closest('tr').find('td:eq(4)')
					.text(), "delete",$(this).closest('tr').find('td:eq(1)')
					.text());
		});

$(document).on('click', ".project_cancel_button", function() {
	$('.fade').css("display", "none");
	$('.createProjectContainer').css("display", "none");
});

$(document).on('click', ".edit_group_cancel_button", function() {
	$('.fade').css("display", "none");
	$('.editGroupContainer').css("display", "none");
});

$(document).on(
		'click',
		".edit_group_save_button",
		function() {
			var oldFnGrpname = $('.editOldFnGrpname').val();
			var newFnGrpname = $('.editFnGrpname').val();
			var oldFnGrpURL = $('.editOldFnGrpURL').val();
			var newFnGrpURL = $('.editNewFnGrpURL').val();

			console.log(oldFnGrpname + " " + newFnGrpname + " " + oldFnGrpURL
					+ " " + newFnGrpURL);
			if (newFnGrpname != "" && newFnGrpURL != "") {
				var isAvailable = CurrentPageRepo
						.checkGrpnamePresent(newFnGrpname);
				console.log("Group name available : " + isAvailable);
				if (!isAvailable) {
					CurrentPageRepo.saveEditGroupResult(oldFnGrpname,
							newFnGrpname, oldFnGrpURL, newFnGrpURL);
					$('.fade').css("display", "none");
					$('.editGroupContainer').css("display", "none");
					CurrentPageRepo.fillObjRepoPanel();
				} else {
					$('.createPopUpContainer').css('display', 'block');
					$('.popUpmsg').text('Group name is already present.');
					// alert("Group name is already present.");
				}
			} else {
				$('.createPopUpContainer').css('display', 'block');
				$('.popUpmsg').text(
						'Please enter valid group name and page URL.');
			}

		});

$(document).on('click', ".delete_group_button", function() {
	var fnGrpname = $(this).closest('tr').find('td:eq(1)').text();
	var fnGrpUrl = $(this).closest('tr').find('td:eq(2)').text();
	console.log(fnGrpname + " " + fnGrpUrl);
	CurrentPageRepo.deleteGroupResult(fnGrpname, fnGrpUrl);
	CurrentPageRepo.fillObjRepoPanel();
});

$(document).on(
		'click',
		".project_save_button",
		function() {
			var grpName = $('.fnGrpname').val();
			var grpPageURL = $('.fnGrpURL').val();
			if (grpName != "" && grpPageURL) {
				var isAvailable = CurrentPageRepo.checkGrpnamePresent($(
						'.fnGrpname').val());
				if (!isAvailable) {
					PreviewElement.addFunctionGroup($('.fnGrpname').val(), $(
							'.fnGrpURL').val());
					$('.fade').css("display", "none");
					$('.createProjectContainer').css("display", "none");
				} else {
					// alert("Group name is already present.");
					$('.createPopUpContainer').css('display', 'block');
					$('.popUpmsg').text('Group name is already present.');
				}
			} else {
				$('.createPopUpContainer').css('display', 'block');
				$('.popUpmsg').text(
						'Please enter valid group name and page URL.');
			}

		});

$(document).on('click', ".tab_selector", function() {
	if ($(this).text() == "Object Repository") {
		$(this).addClass("ionTabs__tab_state_active");
		$('.objectRepoGroupsTab').removeClass("ionTabs__tab_state_active");
		$('.table-element').show();
		$('.table-group').hide();
	} else if ($(this).text() == "Functional Group") {
		$(this).addClass("ionTabs__tab_state_active");
		$('.objectRepoTab').removeClass("ionTabs__tab_state_active");
		$('.table-element').hide();
		$('.table-group').show();
	}
});

$(document).ready(function() {
	$('.table-group').hide();
	//$('.fade').css("display", "none");
});