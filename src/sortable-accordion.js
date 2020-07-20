import React from "react";
import {
	SortableContainer,
	SortableElement,
	SortableHandle
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => (
	<span className="fa fa-ellipsis-v drag-handle" />
));

const TrashIcon = ({ position, onDeleteAccordion }) => (
	<span
		className="fa fa-trash eb-accordion-sortable-trash"
		onClick={() => onDeleteAccordion(position)}
	/>
);

const SortableItem = SortableElement(
	({ accordion, position, onDeleteAccordion }) => {
		return (
			<li className="drag-helper">
				<span className="eb-accordion-sortable-item">
					<DragHandle />
					<span className="eb-accordion-sortable-title">{accordion.title}</span>
					<TrashIcon
						position={position}
						onDeleteAccordion={onDeleteAccordion}
					/>
				</span>
			</li>
		);
	}
);

const SortableList = SortableContainer(({ accordions, onDeleteAccordion }) => {
	return (
		<ul>
			{accordions.map((accordion, index) => (
				<SortableItem
					key={`item-${index}`}
					index={index}
					position={index}
					accordion={accordion}
					onDeleteAccordion={onDeleteAccordion}
				/>
			))}
		</ul>
	);
});

const SortableAccordions = ({ accordions, onDeleteAccordion, onSortEnd }) => (
	<SortableList
		accordions={accordions}
		onDeleteAccordion={onDeleteAccordion}
		onSortEnd={onSortEnd}
		useDragHandle={true}
	/>
);

export default SortableAccordions;
