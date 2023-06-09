let subMenu = document.getElementById("subMenu");

 

function toggleMenu(){
	subMenu.classList.toggle("open-menu");
	subMenu.classList.remove
}

$(document).ready(function($) 
{

function select_unselect_checkbox (this_el, select_el) 
 		{

			if(this_el.prop("checked"))
			{
				select_el.prop('checked', true);
			}
			else
			{ 
				select_el.prop('checked', false);				 
			}
 		};

		$(document).on('change', '.select_all_items', function(event) 
		{
			event.preventDefault();

			var ele = $(document).find('.item_id'); 

			select_unselect_checkbox($(this), ele); 
		});
		//--->select/unselect all > end


	});
	



