import './style.css'
import {ProjectData} from 'data/ProjectData'

export function generateCategoryIcons(project: ProjectData, color?: string) {
	return project.categories?.map(category => {
		return <i className={`${getCategoryDeviconClass(category)} category-icon`} style={{color: color || 'var(--primary-color)'}}/>
	}) || []
}

export function getCategoryDeviconClass(category: string): string {
	return `devicon-${category}-plain`
}
