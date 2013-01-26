"use strict";
if (!window.$) window.$ = {};

{
	var DataEncode = function (data, xhr)
	{
		var formData =  [];
		if (data)
		{
			if (xhr) {
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			}
			for (var key in data) {
				formData.push(key, data[key]);
			}
		}
		return formData.join("&");
	}

	var Ajax = function (method, url, data, success, dataType) {
		if (typeof data === "function") {
			if (typeof success === "string") {
				dataType = success;
			}
			success = data;
			data = null;
		}
		else if (typeof data === "string") {
			dataType = data;
			success = null;
			data = null;
		}

		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		if (dataType)
		{
			xhr.responseType = dataType;
		}
		if (success)
		{
			xhr.onload = function () {
				if (dataType)
					success(this.response, this.statusText, this);
				else
					success(this.responseXML || this.responseBody || this.responseText || this.response, this.statusText, this);
			}
		}
		
		xhr.send(DataEncode(data, xhr));
		return xhr;
	}

	$.get = function (url, data, success, dataType) {
		if (data)
		{
			if (url.indexOf("?") >= 0)
				url += "&" + DataEncode(data);
			else
				url += "?" + DataEncode(data);
		}
		return Ajax("GET", url, success, dataType);
	}

	$.post = function (url, data, success, dataType) {
		return Ajax("POST", url, data, success, dataType);
	}
}